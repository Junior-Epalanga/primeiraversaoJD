<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import aboutImage from '../assets/images/foto-cadeira.jpg'

const { currentLang } = useLanguage()

const content = {
  PT: {
    about: {
      title: "Sobre João Dono",
      bio: "João Dono é Advogado, Árbitro e Strategic Advisor com mais de 23 anos de prática jurídica e executiva em Angola, Portugal e Cabo Verde. Ajuda organizações a reduzir fricção decisional, fortalecer a governação e evitar erros caros.\n\nA sua actuação centra-se em três áreas que mais custam às organizações: Decisões mal estruturadas, Conflitos evitáveis e Crescimento sem governação adequada.",
      areasTitle: "Áreas de foco:",
      areas: [
        "Decisão Estratégica",
        "Governação Corporativa",
        "Liderança Executiva",
        "Risco Contratual & Negociação",
        "Desenvolvimento Organizacional",
        "Arbitragem & Resolução de Conflitos"
      ],
      closing: "O cliente não recebe apenas um formador. Recebe clareza, critério e melhor decisão."
    }
  },
  EN: {
    about: {
      title: "About João Dono",
      bio: "João Dono is a Lawyer, Arbitrator and Strategic Advisor with over 23 years of legal and executive practice across Angola, Portugal and Cabo Verde. He helps organisations reduce decision friction, strengthen governance and avoid expensive mistakes.\n\nHis work focuses on three areas that cost organisations most: Poorly structured decisions, Avoidable conflicts and Growth without adequate governance.",
      areasTitle: "Focus Areas:",
      areas: [
        "Strategic Decision-Making",
        "Corporate Governance",
        "Executive Leadership",
        "Contractual Risk & Negotiation",
        "Organisational Capability Building",
        "Arbitration & Conflict Resolution"
      ],
      closing: "Clients do not receive a trainer. They receive judgment, clarity and criterion."
    }
  }
}

const t = computed(() => content[currentLang.value])
</script>

<template>
  <div class="pt-20">
    <section class="py-24 lg:py-40 px-6 lg:px-24 bg-cream overflow-hidden">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-24">
        <div class="lg:w-1/2 flex flex-col justify-center">
          <h1 class="text-4xl lg:text-6xl font-serif mb-12">{{ t.about.title }}</h1>
          <p class="text-lg text-primary/80 leading-loose mb-12 whitespace-pre-line">
            {{ t.about.bio }}
          </p>
          
          <div class="mb-12">
            <h4 class="text-xs font-bold tracking-widest uppercase text-accent mb-6">{{ t.about.areasTitle }}</h4>
            <ul class="grid sm:grid-cols-2 gap-4">
              <li v-for="area in t.about.areas" :key="area" class="flex items-center gap-3 text-primary/70">
                <div class="w-1.5 h-1.5 bg-accent"></div>
                {{ area }}
              </li>
            </ul>
          </div>

          <p class="italic text-accent text-xl font-serif">
            {{ t.about.closing }}
          </p>
        </div>
        <div class="lg:w-1/2">
           <div class="aspect-[4/5] bg-primary relative overflow-hidden group">
             <img :src="aboutImage" alt="João Dono" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" />
             <div class="absolute inset-0 bg-accent/10"></div>
           </div>
        </div>
      </div>
    </section>
  </div>
</template>
