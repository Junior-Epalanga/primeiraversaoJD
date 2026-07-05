<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { Mail, Phone, MapPin } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { currentLang } = useLanguage()

const content = {
  PT: {
    contact: {
      title: "Contacto",
      subtitle: "Conversas relevantes começam com clareza.",
      info: "Para mandatos de advisory, programas executivos, intervenções ou parcerias:",
      response: "Resposta em até 48 horas úteis.",
      form: {
        name: "Nome",
        company: "Empresa / Organização",
        email: "Email",
        subject: "Assunto",
        message: "Mensagem",
        send: "Enviar",
        sending: "A enviar…",
        success: "Mensagem enviada. Responderemos em breve.",
        error: "Não foi possível enviar. Tente novamente ou contacte jd@joaodono.com.",
        subjects: {
          advisory: "Advisory",
          education: "Educação Executiva",
          book: "Livro",
          other: "Outro"
        }
      }
    },
    finalCta: {
      text: "Quando a decisão importa, a clareza vale mais.",
      btn: "Solicitar Conversa Estratégica"
    }
  },
  EN: {
    contact: {
      title: "Contact",
      subtitle: "Meaningful conversations start with clarity.",
      info: "For advisory mandates, executive programmes, speaking invitations or partnerships:",
      response: "Response within 48 business hours.",
      form: {
        name: "Name",
        company: "Company / Organisation",
        subject: "Subject",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending…",
        success: "Message sent. We will respond shortly.",
        error: "Could not send. Please try again or email jd@joaodono.com.",
        subjects: {
          advisory: "Advisory",
          education: "Executive Education",
          book: "Book",
          other: "Other"
        }
      }
    },
    finalCta: {
      text: "When the decision matters, clarity is worth more.",
      btn: "Request a Strategic Conversation"
    }
  }
}

const t = computed(() => content[currentLang.value])

const subjectOptions = computed(() => {
  const s = t.value.contact.form.subjects
  return [
    { value: s.advisory, label: s.advisory },
    { value: s.education, label: s.education },
    { value: s.book, label: s.book },
    { value: s.other, label: s.other },
  ]
})

const form = reactive({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

async function submitContact() {
  if (status.value === 'sending') return

  status.value = 'sending'
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        subject: form.subject || subjectOptions.value[0]?.value,
        lang: currentLang.value,
      }),
    })

    if (!res.ok) throw new Error('request_failed')

    status.value = 'success'
    form.name = ''
    form.email = ''
    form.company = ''
    form.subject = ''
    form.message = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div class="pt-20">
    <section class="py-24 lg:py-40 px-6 lg:px-24 bg-cream">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
        <div class="lg:w-1/2">
          <h1 class="text-4xl lg:text-7xl font-serif mb-8">{{ t.contact.title }}</h1>
          <p class="text-2xl text-primary/70 mb-12">{{ t.contact.subtitle }}</p>
          
          <div class="space-y-12">
            <div class="flex items-center gap-8">
              <div class="w-16 h-16 rounded-none border border-accent flex items-center justify-center text-accent">
                <Mail class="w-6 h-6" />
              </div>
              <div>
                <p class="text-xs font-bold uppercase opacity-40 mb-2">Email</p>
                <p class="text-2xl font-serif">jd@joaodono.com</p>
              </div>
            </div>
            <div class="flex items-center gap-8">
              <div class="w-16 h-16 rounded-none border border-accent flex items-center justify-center text-accent">
                <Phone class="w-6 h-6" />
              </div>
              <div>
                <p class="text-xs font-bold uppercase opacity-40 mb-2">Phone</p>
                <p class="text-2xl font-serif"> </p>
              </div>
            </div>
            <div class="flex items-center gap-8">
              <div class="w-16 h-16 rounded-none border border-accent flex items-center justify-center text-accent">
                <MapPin class="w-6 h-6" />
              </div>
              <div>
                <p class="text-xs font-bold uppercase opacity-40 mb-2">Location</p>
                <p class="text-2xl font-serif">Luanda, Angola</p>
              </div>
            </div>
          </div>
          
          <p class="mt-20 text-primary/40 text-sm tracking-widest uppercase">{{ t.contact.response }}</p>
        </div>

        <!-- Contact Form -->
        <div class="lg:w-1/2 bg-white p-8 lg:p-16 shadow-2xl border border-primary/5">
          <form @submit.prevent="submitContact" class="space-y-8">
            <div>
              <label class="text-xs font-bold uppercase tracking-widest opacity-50 block mb-3">{{ t.contact.form.name }}</label>
              <input type="text"
               v-model="form.name"
               class="w-full bg-cream border-b border-primary/20 p-5 focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label class="text-xs font-bold uppercase tracking-widest opacity-50 block mb-3">{{ t.contact.form.company }}</label>
              <input type="text"
               v-model="form.company"
               class="w-full bg-cream border-b border-primary/20 p-5 focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label class="text-xs font-bold uppercase tracking-widest opacity-50 block mb-3">{{ t.contact.form.email }}</label>
              <input type="email"
               v-model="form.email"
               class="w-full bg-cream border-b border-primary/20 p-5 focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label class="text-xs font-bold uppercase tracking-widest opacity-50 block mb-3">{{ t.contact.form.subject }}</label>
              <select
               v-model="form.subject"
               class="w-full bg-cream border-b border-primary/20 p-5 focus:outline-none focus:border-accent transition-colors appearance-none">
               <option value="" disabled>{{ t.contact.form.subject }}</option>
                <option v-for="opt in subjectOptions" :key="opt.value" :value="opt.value">
                  {{ opt.label }}
                </option>
              </select>
            </div>
            <div>
              <label class="text-xs font-bold uppercase tracking-widest opacity-50 block mb-3">{{ t.contact.form.message }}</label>
              <textarea rows="4" class="w-full bg-cream border-b border-primary/20 p-5 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
            </div>
            <button type="submit" class="w-full btn-gold !mt-16 h-14">
              {{ t.contact.form.send }}
            </button>
            <p class="text-[11px] text-center text-primary/40 uppercase tracking-widest mt-8">
              {{ currentLang === 'PT' ? 'A sua informação é tratada com total confidencialidade.' : 'Your information is treated with total confidentiality.' }}
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Final CTA moved here for contact flow -->
    <section class="py-32 px-6 bg-primary text-center">
       <div class="max-w-3xl mx-auto">
         <h2 class="text-3xl lg:text-5xl font-serif text-white mb-12">
           {{ t.finalCta.text }}
         </h2>
         <button class="btn-gold inline-block">
           {{ t.finalCta.btn }}
         </button>
       </div>
    </section>
  </div>
</template>
