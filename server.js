// server.ts
import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// server/contactEmail.ts
import nodemailer from "nodemailer";
var CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "jd@joaodono.com";
function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function buildContactMail(payload) {
  const { name, email, company, subject, message } = payload;
  const text = [
    "Novo contacto via joaodono.com",
    "",
    `Nome: ${name}`,
    `Email: ${email}`,
    `Empresa: ${company}`,
    `Assunto: ${subject}`,
    "",
    "Mensagem:",
    message
  ].join("\n");
  const html = `
    <h2>Novo contacto via joaodono.com</h2>
    <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
    <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Mensagem:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;
  return {
    to: CONTACT_TO,
    subject: `[joaodono.com] ${subject} \u2014 ${name}`,
    text,
    html,
    replyTo: email
  };
}
async function sendContactEmail(payload) {
  const host = process.env.SMTP_HOST;
  if (!host) {
    throw new Error("SMTP_NOT_CONFIGURED");
  }
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const from = process.env.SMTP_FROM;
  if (!from) {
    throw new Error("SMTP_FROM_MISSING");
  }
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: process.env.SMTP_USER && process.env.SMTP_PASS ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : void 0
  });
  const mail = buildContactMail(payload);
  await transporter.sendMail({
    from,
    to: mail.to,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
    replyTo: mail.replyTo
  });
}

// server.ts
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var app = express();
var PORT = Number(process.env.PORT ?? 8080);
var isProduction = process.env.NODE_ENV === "production";
app.use(express.json({ limit: "32kb" }));
var LIMITS = {
  name: 200,
  email: 254,
  company: 200,
  subject: 100,
  message: 5e3
};
function trimField(value, max) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
app.post("/api/contact", async (req, res) => {
  const payload = {
    name: trimField(req.body?.name, LIMITS.name),
    email: trimField(req.body?.email, LIMITS.email),
    company: trimField(req.body?.company, LIMITS.company),
    subject: trimField(req.body?.subject, LIMITS.subject),
    message: trimField(req.body?.message, LIMITS.message),
    lang: trimField(req.body?.lang, 8)
  };
  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    return res.status(400).json({ error: "missing_fields" });
  }
  if (!isValidEmail(payload.email)) {
    return res.status(400).json({ error: "invalid_email" });
  }
  try {
    if (!process.env.SMTP_HOST) {
      if (!isProduction) {
        console.log("[contact] SMTP n\xE3o configurado \u2014 submiss\xE3o:", payload);
        return res.json({ ok: true, dev: true });
      }
      return res.status(503).json({ error: "email_unavailable" });
    }
    await sendContactEmail(payload);
    return res.json({ ok: true });
  } catch (err) {
    const code = err instanceof Error ? err.message : "unknown";
    console.error("[contact] Falha ao enviar email:", err);
    if (code === "SMTP_FROM_MISSING") {
      return res.status(503).json({ error: "email_misconfigured" });
    }
    return res.status(500).json({ error: "send_failed" });
  }
});
if (isProduction) {
  const distPath = path.join(__dirname, "dist");
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
