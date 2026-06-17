<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { currentLang } = useLanguage()

const content = {
  PT: {
    education: {
      title: "Educação Executiva",
      desc: "Programas premium para organizações que desejam líderes mais fortes, decisões melhores e equipas mais capazes.",
      differentiator: "O cliente não recebe um formador. Recebe o advisor.",
      programs: [
        {
          title: "O Jurista Empresarial Moderno",
          target: "Juristas internos que querem evoluir de função técnica para parceiro estratégico do negócio.",
          price: "USD 4.000+"
        },
        {
          title: "Direito Empresarial para Gestores",
          target: "Gestores que tomam decisões com implicações jurídicas e precisam de clareza e segurança.",
          price: "USD 4.000+"
        },
        {
          title: "Contratos, Risco & Negociação",
          target: "Equipas que lidam com fornecedores, contratos e decisões comerciais.",
          price: "USD 4.000+"
        }
      ],
      additional: "Temas Adicionais: Liderança & Performance, Governação & Accountability, Decisão sob Pressão, Risco Jurídico para Executivos."
    }
  },
  EN: {
    education: {
      title: "Executive Education",
      desc: "Premium programmes for organisations that want stronger leaders, better decisions and more capable teams.",
      differentiator: "Clients do not receive a trainer. They receive the advisor.",
      programs: [
        {
          title: "The Modern Corporate Lawyer",
          target: "In-house lawyers who want to move beyond technical function and become strategic business partners.",
          price: "USD 4,000+"
        },
        {
          title: "Legal Essentials for Business Leaders",
          target: "Managers making decisions with legal implications who need clarity and confidence to do it well.",
          price: "USD 4,000+"
        },
        {
          title: "Contracts, Risk & Negotiation",
          target: "Teams dealing with suppliers, contracts and commercial decisions.",
          price: "USD 4,000+"
        }
      ],
      additional: "Additional Themes: Leadership & Performance, Governance & Accountability, Decision Quality Under Pressure, Legal Risk for Executives."
    }
  }
}

const t = computed(() => content[currentLang.value])
</script>

<template>
  <div class="pt-20">
    <section class="py-24 px-6 lg:px-24 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-3xl mb-16">
          <h1 class="text-4xl lg:text-6xl font-serif mb-6">{{ t.education.title }}</h1>
          <p class="text-xl text-primary/70 leading-relaxed mb-8">{{ t.education.desc }}</p>
          <p class="text-accent font-serif italic text-2xl">{{ t.education.differentiator }}</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div v-for="program in t.education.programs" :key="program.title" class="p-8 bg-cream border border-primary/5 group hover:border-accent transition-all">
            <h3 class="text-2xl font-serif mb-6 group-hover:text-accent transition-colors">{{ program.title }}</h3>
            <p class="text-primary/70 leading-relaxed mb-8 text-lg">{{ program.target }}</p>
            <div class="flex justify-between items-center mt-auto">
              <span class="text-xs font-bold tracking-widest text-primary/40 uppercase">{{ program.price }}</span>
              <router-link to="/contacto" class="text-xs font-bold tracking-widest uppercase border-b border-accent pb-1">{{ currentLang === 'PT' ? 'Solicitar Proposta' : 'Request Proposal' }}</router-link>
            </div>
          </div>
        </div>

        <div class="mt-20 p-8 border-l-2 border-accent bg-cream/50">
          <p class="text-sm tracking-[.2em] font-bold text-primary/60 uppercase">
             {{ t.education.additional }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
