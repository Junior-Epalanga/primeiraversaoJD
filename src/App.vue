<script setup lang="ts">
import { ref, computed } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useLanguage } from './composables/useLanguage'
import logotipo from './assets/images/Logotipo.png'

const { currentLang, toggleLang } = useLanguage()

const isMenuOpen = ref(false)

const navLinks = {
  PT: [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Advisory', href: '/advisory' },
    { name: 'Educação Executiva', href: '/educacao-executiva' },
    { name: 'Livro', href: '/livro' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contacto', href: '/contacto' },
  ],
  EN: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/sobre' },
    { name: 'Advisory', href: '/advisory' },
    { name: 'Executive Education', href: '/educacao-executiva' },
    { name: 'Book', href: '/livro' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contacto' },
  ]
}

const links = computed(() => navLinks[currentLang.value])

</script>

<template>
  <div class="min-h-screen bg-cream selection:bg-accent/30 selection:text-primary">
    <!-- Navigation -->
    <nav 
      class="fixed top-0 left-0 w-full z-50 border-b border-primary/5 transition-colors duration-300"
      :class="isMenuOpen ? 'bg-cream' : 'bg-cream/80 backdrop-blur-md'"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <router-link to="/" class="flex items-center shrink-0" aria-label="João Dono — Início">
          <img
            :src="logotipo"
            alt="João Dono"
            class="h-10 lg:h-12 w-auto object-contain"
          />
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-8">
          <router-link v-for="link in links" :key="link.href" :to="link.href" class="text-sm font-medium tracking-wide hover:text-accent transition-colors" active-class="text-accent">
            {{ link.name }}
          </router-link>
          <button @click="toggleLang" class="ml-4 text-xs font-bold border border-primary px-2 py-1 hover:bg-primary hover:text-white transition-all">
            {{ currentLang === 'PT' ? 'EN' : 'PT' }}
          </button>
        </div>

        <!-- Mobile Toggle -->
        <div class="lg:hidden flex items-center gap-4">
          <button @click="toggleLang" class="text-xs font-bold border border-primary px-2 py-1">
            {{ currentLang === 'PT' ? 'EN' : 'PT' }}
          </button>
          <button @click="isMenuOpen = !isMenuOpen" class="text-primary p-1">
            <Menu v-if="!isMenuOpen" />
            <X v-else />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <transition name="fade">
        <div v-if="isMenuOpen" class="lg:hidden fixed inset-0 top-20 bg-cream z-40 px-6 py-12 flex flex-col gap-6 overflow-y-auto border-t border-primary/5">
          <router-link 
            v-for="link in links" 
            :key="link.href" 
            :to="link.href" 
            @click="isMenuOpen = false" 
            class="text-xl font-serif text-primary hover:text-accent border-b border-primary/5 pb-4 last:border-0"
            active-class="text-accent font-bold"
          >
            {{ link.name }}
          </router-link>
        </div>
      </transition>
    </nav>

    <!-- Page Content -->
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="py-12 bg-white border-t border-primary/5 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <router-link to="/" class="flex items-center shrink-0" aria-label="João Dono — Início">
          <img
            :src="logotipo"
            alt="João Dono"
            class="h-9 w-auto object-contain"
          />
        </router-link>
        <div class="text-[11px] uppercase tracking-widest opacity-40 text-center">
          © 2026 João Dono — Lawyer | Arbitrator | Strategic Advisor. {{ currentLang === 'PT' ? 'Todos os direitos reservados.' : 'All rights reserved.' }}
        </div>
        <div class="flex gap-6 text-xs font-bold">
           <a href="https://www.linkedin.com/in/jssdono/" target="_blank" rel="noopener noreferrer" class="hover:text-accent">LinkedIn</a>
           <router-link to="/insights" class="hover:text-accent">Insights</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}

/* Menu Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
