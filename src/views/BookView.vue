<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import bookCover from '../assets/images/Livro Ecossistema de lideranca.jpg'
import bookCover2 from '../assets/images/Teoria-Geral-Do-Direito-Civil.jpg'
import bookCover3 from '../assets/images/Introdução-ao-Direito-Angolano.jpg'

const { currentLang } = useLanguage()

const content = {
  PT: {
    books: [
      {
        title: 'Ecossistema de Liderança',
        author: 'João Dono | 2025',
        intro: 'A liderança não é um acto isolado. É um sistema. Organizações que crescem sem estrutura de liderança acumulam fragilidade invisível — até ao momento em que essa fragilidade se torna custo real.',
        desc: 'Nesta obra, João Dono explora a liderança como ecossistema onde pessoas, cultura, disciplina, decisão e execução interagem para gerar resultados sustentáveis. É um livro de estrutura — para quem lidera com responsabilidade.',
        image: bookCover,
        ctas: ['Encomendar', 'Sessão Corporativa']
      },
      {
        title: 'Teoria Geral do Direito Civil',
        author: 'João Dono | 2014',
        intro: 'Teoria Geral do Direito Civil é, sem dúvida, uma das disciplinas mais fascinantes do curso do Direito.',
        desc: 'É tradicional a divisão do estudo da Teoria Geral do Direito Civil em duas Partes: Primeira Parte dedicada à Pessoas e Coisas, a Segunda dedicada aos Negócios Jurídicos.',
        image: bookCover2,
        ctas: ['Encomendar', 'Sessão Corporativa']
      },
      {
        title: 'Introdução ao Direito Angolano',
        author: 'João Dono | 2013',
        intro: 'Esta disciplina é essencial nos cursos de Direito e, hoje em dia, em quase todos os cursos.',
        desc: 'Trata-se de uma disciplina propedêutica, de iniciação ao estudo do Direito. Com ela procura-se dar ao aluno uma visão global do Direito, iniciando matérias que serão aprofundadas noutras disciplinas.',
        image: bookCover3,
        ctas: ['Encomendar', 'Sessão Corporativa']
      }
    ]
  },
  EN: {
    books: [
      {
        title: 'Ecossistema de Liderança',
        author: 'João Dono | 2025',
        intro: 'Leadership is not an isolated act. It is a system. Organisations that grow without a leadership structure accumulate invisible fragility — until it becomes a real cost.',
        desc: 'In this book, João Dono explores leadership as an ecosystem where people, culture, discipline, decisions and execution interact to create sustainable results. It is a structure book — for those who lead with responsibility.',
        image: bookCover,
        ctas: ['Order', 'Corporate Session']
      },
      {
        title: 'General Theory of Civil Law',
        author: 'João Dono | 2014',
        intro: 'General Theory of Civil Law is, without a doubt, one of the most fascinating subjects in the law curriculum',
        desc: 'It is traditional to divide the study of General Theory of Civil Law into two parts: the first dedicated to Persons and Things, and the second to Legal Transactions.',
        image: bookCover2,
        ctas: ['Order', 'Corporate Session']
      },
      {
        title: 'Introduction to Angolan Law',
        author: 'João Dono | 2013',
        intro: 'This course is essential for Law degrees and, nowadays, for almost all degree programs.',
        desc: 'It is an introductory course designed to provide a foundation for the study of Law. It aims to give students a comprehensive overview of the legal system, introducing topics that will be explored in greater depth in other courses.',
        image: bookCover3,
        ctas: ['Order', 'Corporate Session']
      }
    ]
  }
}

const t = computed(() => content[currentLang.value])
</script>

<template>
  <div class="pt-20">
    <section class="py-24 lg:py-40 px-6 lg:px-24 bg-primary text-white">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        <div class="lg:w-1/2">
          <div class="relative max-w-md mx-auto aspect-[1/1.4] shadow-2xl overflow-hidden">
            <img
              :src="t.books[0].image"
              :alt="`${t.books[0].title} — João Dono`"
              class="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 border-[10px] border-white/10 pointer-events-none"></div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <span class="text-accent text-sm font-bold tracking-widest uppercase mb-6 block">Author & Thinker</span>
          <h1 class="text-4xl lg:text-7xl font-serif mb-12">{{ t.books[0].title }}</h1>
          <p class="text-2xl font-medium text-accent mb-8 leading-relaxed italic">
            {{ t.books[0].intro }}
          </p>
          <p class="text-white/70 leading-relaxed mb-12 text-lg">
            {{ t.books[0].desc }}
          </p>
          <div class="flex flex-wrap gap-6">
            <button class="btn-gold">{{ t.books[0].ctas[0] }}</button>
            <router-link to="/contacto" class="btn-outline-gold !border-white !text-white hover:!bg-white hover:!text-primary">{{ t.books[0].ctas[1] }}</router-link>
          </div>
        </div>
      </div>
    </section>

    <section
      v-for="(book, index) in t.books.slice(1)"
      :key="book.title"
      class="py-24 lg:py-36 px-6 lg:px-24"
      :class="index % 2 === 0 ? 'bg-white text-primary' : 'bg-primary text-white'"
    >
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        <div class="lg:w-1/2">
          <div class="relative max-w-md mx-auto aspect-[1/1.4] shadow-2xl overflow-hidden">
            <img
              :src="book.image"
              :alt="`${book.title} — João Dono`"
              class="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 border-[10px] border-white/10 pointer-events-none"></div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <span class="text-accent text-sm font-bold tracking-widest uppercase mb-6 block">Author & Thinker</span>
          <h1 class="text-4xl lg:text-7xl font-serif mb-12">{{ book.title }}</h1>
          <p class="text-2xl font-medium text-accent mb-8 leading-relaxed italic">
            {{ book.intro }}
          </p>
          <p :class="index % 2 === 0 ? 'text-primary/70' : 'text-white/70'" class="leading-relaxed mb-12 text-lg">
            {{ book.desc }}
          </p>
          <div class="flex flex-wrap gap-6">
            <button class="btn-gold">{{ book.ctas[0] }}</button>
            <router-link
              to="/contacto"
              :class="index % 2 === 0 ? 'btn-outline-gold !border-primary !text-primary hover:!bg-primary hover:!text-white' : 'btn-outline-gold !border-white !text-white hover:!bg-white hover:!text-primary'"
            >
              {{ book.ctas[1] }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
