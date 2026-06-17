<script setup lang="ts">
import { computed } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'
import heroImage from '../assets/images/JD-hero.png'

const { currentLang } = useLanguage()

const content = {
  PT: {
    hero: {
      title: "Rare decisions deserve rare advisors.",
      subtitle: "João Dono",
      role: "Lawyer | Arbitrator | Strategic Advisor",
      description: "Ajudo líderes, conselhos de administração e organizações a decidir com maior clareza, reduzir risco e crescer com estrutura.",
      ctaPrimary: "Strategic Advisor",
      ctaSecondary: "Agendar Conversa"
    },
    positioning: {
      title: "Direito. Decisão. Estratégia.",
      text1: "Em mercados exigentes, decisões relevantes pedem mais do que opinião técnica.",
      text2: "Exigem clareza jurídica, critério sólido e visão estratégica.",
      text3: "João Dono actua na intersecção entre Direito, arbitragem e aconselhamento executivo — apoiando organizações quando decidir bem faz toda a diferença."
    },
    focus: {
      title: "Como Ajudo / Areas of Focus",
      areas: [
        {
          title: "Strategic Advisor",
          desc: "Apoio a líderes em momentos de crescimento, mudança, risco ou complexidade."
        },
        {
          title: "Governação & Accountability",
          desc: "Estruturas decisórias, alinhamento executivo e disciplina organizacional."
        },
        {
          title: "Arbitragem & Negociação Complexa",
          desc: "Prevenção de conflitos, gestão de tensão e ambientes negociais exigentes."
        },
        {
          title: "Educação Executiva",
          desc: "Programas premium para boards, gestores, juristas e equipas críticas."
        }
      ]
    },
    international: {
      text: "Trusted across Angola, Portugal and Cabo Verde."
    },
    finalCta: {
      text: "Quando a decisão importa, a clareza vale mais.",
      btn: "Solicitar Conversa Estratégica"
    }
  },
  EN: {
    hero: {
      title: "Rare decisions deserve rare advisors.",
      subtitle: "João Dono",
      role: "Lawyer | Arbitrator | Strategic Advisor",
      description: "Helping leaders and organisations decide with greater clarity, reduce risk and grow with stronger structures.",
      ctaPrimary: "Strategic Advisor",
      ctaSecondary: "Schedule a Conversation"
    },
    positioning: {
      title: "Law. Judgment. Strategy.",
      text1: "In demanding markets, important decisions require more than technical opinion.",
      text2: "They require legal clarity, balanced judgment and strategic vision.",
      text3: "João Dono works at the intersection of law, arbitration and executive advisory — supporting organisations precisely when making the right decision matters most."
    },
    focus: {
      title: "How I Help / Areas of Focus",
      areas: [
        {
          title: "Strategic Advisory",
          desc: "Support for leaders navigating growth, change, risk or complexity."
        },
        {
          title: "Governance & Accountability",
          desc: "Decision structures, executive alignment and organisational discipline."
        },
        {
          title: "Arbitration & Complex Negotiations",
          desc: "Conflict prevention, tension management and high-stakes negotiation environments."
        },
        {
          title: "Executive Education",
          desc: "Premium programmes for boards, executives, lawyers and critical teams."
        }
      ]
    },
    international: {
      text: "Trusted across Angola, Portugal and Cabo Verde."
    },
    finalCta: {
      text: "When the decision matters, clarity is worth more.",
      btn: "Request a Strategic Conversation"
    }
  }
}

const t = computed(() => content[currentLang.value])
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[calc(100dvh+8rem)] lg:min-h-[calc(100dvh+4rem)] flex flex-col lg:flex-row bg-primary overflow-hidden">
      <div class="flex-1 flex flex-col justify-center px-6 lg:px-24 pt-28 pb-40 sm:pb-44 lg:pt-36 lg:pb-48 z-10">
        <h2 class="text-white font-serif italic text-xl mb-4 opacity-80">{{ t.hero.subtitle }}</h2>
        <h1 class="text-accent font-serif text-5xl lg:text-7xl leading-tight mb-8 max-w-2xl">
          {{ t.hero.title }}
        </h1>
        <p class="text-white/60 text-lg sm:text-xl font-medium mb-12 max-w-xl">
          {{ t.hero.role }}
        </p>
        <p class="text-white/80 text-lg mb-12 max-w-xl leading-relaxed">
          {{ t.hero.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-4">
          <router-link to="/advisory" class="btn-gold text-center">
            {{ t.hero.ctaPrimary }}
          </router-link>
          <router-link to="/contacto" class="btn-outline-gold text-center !border-white !text-white hover:!bg-white hover:!text-primary">
            {{ t.hero.ctaSecondary }}
          </router-link>
        </div>
      </div>
      <div class="flex-1 relative min-h-[560px] lg:min-h-[calc(100dvh+4rem)]">
        <div class="absolute inset-0 bg-[#002B2A] flex items-center justify-center overflow-hidden">
           <img
             :src="heroImage"
             alt="João Dono"
             class="w-full h-full object-cover mix-blend-luminosity opacity-60"
           />
           <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>
      </div>
    </section>

    <!-- Bloco 2 — Posicionamento -->
    <section class="py-24 lg:py-32 px-6 lg:px-24 bg-white">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
        <div class="flex flex-col justify-center">
          <h2 class="text-4xl lg:text-5xl font-serif text-primary mb-12 leading-tight">
            {{ t.positioning.title }}
          </h2>
        </div>
        <div class="space-y-8 text-lg text-primary/80 leading-relaxed">
          <p class="font-medium text-primary text-xl">{{ t.positioning.text1 }}</p>
          <p>{{ t.positioning.text2 }}</p>
          <p>{{ t.positioning.text3 }}</p>
        </div>
      </div>
    </section>

    <!-- Bloco 3 — Como Ajudo / Areas of Focus -->
    <section class="py-24 lg:py-40 px-6 lg:px-24 bg-cream overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="mb-20">
           <h2 class="text-3xl lg:text-4xl font-serif text-primary border-l-4 border-accent pl-8">{{ t.focus.title }}</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-px bg-primary/5">
          <div v-for="(area, index) in t.focus.areas" :key="index" class="p-12 bg-cream hover:bg-white transition-colors group">
            <div class="w-12 h-12 mb-8 relative">
              <div class="absolute inset-0 border border-accent/20 group-hover:rotate-45 transition-transform duration-500"></div>
              <div class="absolute inset-0 border border-accent/40 rotate-12 group-hover:rotate-90 transition-transform duration-700"></div>
            </div>
            <h3 class="text-2xl font-serif text-primary mb-6">{{ area.title }}</h3>
            <p class="text-primary/70 leading-relaxed text-lg">{{ area.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bloco 4 — Presença Internacional -->
    <section class="py-24 px-6 bg-white border-y border-primary/5">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-2xl lg:text-3xl font-serif text-primary/80 mb-12 italic leading-relaxed max-w-4xl mx-auto">
          {{ t.international.text }}
        </p>
        <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-sm font-bold tracking-[.4em] uppercase opacity-40">
           <span class="hover:opacity-100 transition-opacity cursor-default">Angola</span>
           <span class="text-accent">•</span>
           <span class="hover:opacity-100 transition-opacity cursor-default">Portugal</span>
           <span class="text-accent">•</span>
           <span class="hover:opacity-100 transition-opacity cursor-default">Cabo Verde</span>
        </div>
      </div>
    </section>

    <!-- Bloco 5 — CTA Final da Homepage -->
    <section class="py-40 px-6 bg-primary text-center">
       <div class="max-w-4xl mx-auto">
         <h2 class="text-4xl lg:text-6xl font-serif text-white mb-16 leading-tight">
           {{ t.finalCta.text }}
         </h2>
         <router-link to="/contacto" class="btn-gold !px-10 !py-4 inline-block shadow-2xl hover:-translate-y-1 transition-transform">
           {{ t.finalCta.btn }}
         </router-link>
       </div>
    </section>
  </div>
</template>
