import { ref, computed } from 'vue'

export type Language = 'PT' | 'EN'

const currentLang = ref<Language>('PT')

export function useLanguage() {
  const toggleLang = () => {
    currentLang.value = currentLang.value === 'PT' ? 'EN' : 'PT'
  }

  return {
    currentLang,
    toggleLang
  }
}
