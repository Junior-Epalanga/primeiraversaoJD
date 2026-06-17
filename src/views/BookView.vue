<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { currentLang } = useLanguage()

const content = {
  PT: {
    book: {
      title: "Ecossistema de Liderança",
      author: "João Dono | 2025",
      intro: "A liderança não é um acto isolado. É um sistema. Organizações que crescem sem estrutura de liderança acumulam fragilidade invisível — até ao momento em que essa fragilidade se torna custo real.",
      desc: "Nesta obra, João Dono explora a liderança como ecossistema onde pessoas, cultura, disciplina, decisão e execução interagem para gerar resultados sustentáveis. É um livro de estrutura — para quem lidera com responsabilidade.",
      ctas: ["Encomendar", "Sessão Corporativa"]
    }
  },
  EN: {
    book: {
      title: "Ecossistema de Liderança",
      author: "João Dono | 2025",
      intro: "Leadership is not an isolated act. It is a system. Organisations that grow without a leadership structure accumulate invisible fragility — until it becomes a real cost.",
      desc: "In this book, João Dono explores leadership as an ecosystem where people, culture, discipline, decisions and execution interact to create sustainable results. It is a structure book — for those who lead with responsibility.",
      ctas: ["Order", "Corporate Session"]
    }
  }
}

const t = computed(() => content[currentLang.value])
</script>

<template>
  <div class="pt-20">
    <section class="py-24 lg:py-40 px-6 lg:px-24 bg-primary text-white">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        <div class="lg:w-1/2">
          <div class="relative max-w-md mx-auto aspect-[1/1.4] bg-white text-primary flex items-center justify-center p-12 shadow-2xl overflow-hidden">
             <!-- Book Cover Placeholder -->
             <div class="absolute inset-0 border-[10px] border-primary/5"></div>
             <div class="text-center z-10">
               <span class="text-xs tracking-[.4em] uppercase mb-4 block text-accent font-bold">Ecossistema de</span>
               <h1 class="text-5xl lg:text-7xl font-serif mb-8 leading-none">Liderança</h1>
               <div class="h-px bg-accent w-24 mx-auto mb-8"></div>
               <p class="font-serif italic text-lg opacity-60">João Dono</p>
             </div>
             <div class="absolute bottom-12 right-0 left-0 text-[80px] font-serif text-accent/5 pointer-events-none select-none -mb-32">LDR</div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <span class="text-accent text-sm font-bold tracking-widest uppercase mb-6 block">Author & Thinker</span>
          <h1 class="text-4xl lg:text-7xl font-serif mb-12">{{ t.book.title }}</h1>
          <p class="text-2xl font-medium text-accent mb-8 leading-relaxed italic">
            {{ t.book.intro }}
          </p>
          <p class="text-white/70 leading-relaxed mb-12 text-lg">
            {{ t.book.desc }}
          </p>
          <div class="flex flex-wrap gap-6">
            <button class="btn-gold">{{ t.book.ctas[0] }}</button>
            <router-link to="/contacto" class="btn-outline-gold !border-white !text-white hover:!bg-white hover:!text-primary">{{ t.book.ctas[1] }}</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
