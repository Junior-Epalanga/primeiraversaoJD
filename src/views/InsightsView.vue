<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { currentLang } = useLanguage()

const content = {
  PT: {
    insights: {
      title: "Insights",
      subtitle: "Archive of Thought",
      intro: "Reflexões sobre decisão, governação, liderança e mercados lusófonos africanos. Esta secção publica artigos e perspectivas de João Dono.",
      topicsTitle: "Temas prioritários:",
      topics: [
        "A nova arquitetura na decisão empresarial",
        "Mercado financeiro angolano: Da poupança tradicional à cultura de investimento",
        "Entre o controlo e a decisão…",
        "Da renda à riqueza: O que separa os países que crescem dos que prosperam",
        "Do Conselho de Administração ao Campo: Como decisões estratégicas impactam a economia real",
        "Introdução ao Direito Angolano",
        "Teoria Geral do Direito Civil"
      ],
      cta: "Ver Arquivo"
    }
  },
  EN: {
    insights: {
      title: "Insights",
      subtitle: "Archive of Thought",
      intro: "Reflections on decision-making, governance, leadership and Lusophone African markets. This section publishes articles and perspectives by João Dono.",
      topicsTitle: "Priority themes:",
      topics: [
        "The new architecture in business decision-making",
        "The Angolan financial market: from traditional savings to an investment culture",
        "Between control and decision…",
        "From income to wealth: what separates countries that grow from those that prosper",
        "From the Board of Directors to the field: how strategic decisions impact the real economy",
        "Introduction to Angolan Law",
        "General Theory of Civil Law"
      ],
      cta: "View Archive"
    }
  }
}

const t = computed(() => content[currentLang.value])
</script>

<template>
  <div class="pt-20">
    <section class="py-24 px-6 lg:px-24 bg-white">
      <div class="max-w-4xl mx-auto">
        <span class="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">{{ t.insights.subtitle }}</span>
        <h1 class="text-4xl lg:text-7xl font-serif mb-12">{{ t.insights.title }}</h1>
        
        <p class="text-2xl text-primary/80 mb-12 leading-relaxed">
          {{ t.insights.intro }}
        </p>

        <div class="bg-cream p-12 border border-primary/5 mb-16">
          <h2 class="text-xs font-bold tracking-widest uppercase text-accent mb-8">{{ t.insights.topicsTitle }}</h2>
          <ul class="space-y-6">
            <li v-for="topic in t.insights.topics" :key="topic" class="flex items-center gap-6 group cursor-pointer">
              <div class="w-2 h-2 bg-accent opacity-30 group-hover:opacity-100 transition-opacity"></div>
              <span class="text-xl font-serif group-hover:text-accent transition-colors">{{ topic }}</span>
            </li>
          </ul>
        </div>

        <div class="text-center">
          <button class="text-sm font-bold tracking-widest uppercase border-accent border-b-2 pb-1">{{ t.insights.cta }}</button>
        </div>
      </div>
    </section>
  </div>
</template>
