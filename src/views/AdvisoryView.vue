<script setup lang="ts">
import { computed } from 'vue'
import { ChevronRight, Compass, Shield, Handshake, ShieldAlert, Users } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { currentLang } = useLanguage()

const content = {
  PT: {
    advisory: {
      title: "Strategic Advisor",
      subtitle: "Mandatos selectivos para líderes e organizações que enfrentam decisões relevantes.",
      services: [
        {
          num: "01",
          title: "Strategic Advisory",
          desc: "Para CEOs e equipas executivas em momentos de crescimento, mudança ou complexidade. Formato: retainer mensal ou projecto definido.",
          icon: Compass
        },
        {
          num: "02",
          title: "Governance Advisory",
          desc: "Estruturas de decisão, accountability, alinhamento de liderança e eficácia executiva. Para boards, administrações e direcções gerais.",
          icon: Shield
        },
        {
          num: "03",
          title: "Arbitragem & Negociação",
          desc: "Prevenção de litígios, estratégia negocial e apoio estruturado em situações sensíveis. Baseado em experiência arbitral real.",
          icon: Handshake
        },
        {
          num: "04",
          title: "Conflict Prevention & Executive Advisory",
          desc: "Para grupos empresariais e boards que pretendem prevenir conflitos internos, reduzir exposição e decidir com maior solidez. Acesso directo e confidencial.",
          highlight: true,
          icon: ShieldAlert
        },
        {
          num: "05",
          title: "Executive Mentoring",
          desc: "Acompanhamento selectivo a líderes em funções exigentes. Número limitado de mandatos activos. Acesso directo e confidencial.",
          icon: Users
        }
      ]
    }
  },
  EN: {
    advisory: {
      title: "Strategic Advisory",
      subtitle: "Selective mandates for leaders and organisations facing important decisions.",
      services: [
        {
          num: "01",
          title: "Strategic Advisory",
          desc: "For CEOs and executive teams navigating growth, change or complexity. Format: monthly retainer or defined-scope engagement.",
          icon: Compass
        },
        {
          num: "02",
          title: "Governance Advisory",
          desc: "Decision structures, accountability models, leadership alignment and board effectiveness. For boards, executive committees and senior leadership teams.",
          icon: Shield
        },
        {
          num: "03",
          title: "Arbitragem & Negociação",
          desc: "Conflict prevention, negotiation strategy and structured support in sensitive situations. Grounded in real arbitration experience.",
          icon: Handshake
        },
        {
          num: "04",
          title: "Conflict Prevention & Executive Advisory",
          desc: "For business groups and boards seeking to prevent internal conflicts, reduce exposure and make stronger decisions. Direct and confidential access.",
          highlight: true,
          icon: ShieldAlert
        },
        {
          num: "05",
          title: "Executive Mentoring",
          desc: "Selective and confidential support for leaders in demanding roles. Limited number of active mandates. Direct and confidential access.",
          icon: Users
        }
      ]
    }
  }
}

const t = computed(() => content[currentLang.value])
</script>

<template>
  <div class="pt-20">
    <section class="py-24 bg-white px-6 lg:px-24">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16">
          <h1 class="text-4xl lg:text-6xl font-serif mb-6">{{ t.advisory.title }}</h1>
          <p class="text-primary/60 text-xl">{{ t.advisory.subtitle }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, index) in t.advisory.services" :key="index" 
            :class="[
              'p-8 border border-primary/5 transition-all group hover:border-accent',
              service.highlight ? 'bg-primary text-white lg:col-span-1' : 'bg-cream text-primary'
            ]">
            <div class="flex justify-between items-start mb-6">
              <span :class="['text-xs font-bold tracking-widest block', service.highlight ? 'text-accent' : 'text-primary/40']">
                {{ service.num }}
              </span>
              <component :is="service.icon" :class="['w-8 h-8', service.highlight ? 'text-accent' : 'text-primary/20']" />
            </div>
            <h3 :class="['text-2xl font-serif mb-6', service.highlight ? 'text-white' : 'text-primary']">
              {{ service.title }}
            </h3>
            <p :class="['leading-relaxed mb-8 text-lg', service.highlight ? 'text-white/70' : 'text-primary/70']">
              {{ service.desc }}
            </p>
            <router-link to="/contacto" :class="['text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all', service.highlight ? 'text-accent' : 'text-primary']">
              {{ currentLang === 'PT' ? 'Saber mais' : 'Learn more' }}
              <ChevronRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual element with placeholder -->
    <section class="h-[60vh] relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover mix-blend-luminosity brightness-50" />
      <div class="absolute inset-0 bg-primary/20"></div>
      <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
        <h2 class="text-white text-3xl lg:text-5xl font-serif italic max-w-3xl leading-tight">
          "Rare decisions deserve rare advisors."
        </h2>
      </div>
    </section>
  </div>
</template>
