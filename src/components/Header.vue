<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const menuOpen = ref(false)

function changeLanguage(lang) {
  locale.value = lang
  menuOpen.value = false
}
</script>

<template>
  <header class="w-full bg-white border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- ESQUERDA: MENU PÁGINAS (DESKTOP) -->
      <nav class="hidden md:flex space-x-6 text-slate-700">
        <a href="#" class="hover:text-slate-900">Home</a>
        <a href="#" class="hover:text-slate-900">About Luciano Rowlands</a>
      </nav>

      <!-- DIREITA: IDIOMAS (DESKTOP) -->
      <div class="hidden md:flex space-x-4 text-sm text-slate-600">
        <button @click="changeLanguage('en')" class="hover:text-black">EN</button>
        <button @click="changeLanguage('pt')" class="hover:text-black">PT</button>
        <button @click="changeLanguage('es')" class="hover:text-black">ES</button>
      </div>

      <!-- BOTÃO HAMBÚRGUER (MOBILE) -->
      <button
        class="md:hidden text-slate-700"
        @click="menuOpen = !menuOpen"
      >
        ☰
      </button>
    </div>

    <!-- MENU MOBILE -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-4"
    >
      <!-- Links -->
      <nav class="flex flex-col space-y-2 text-slate-700">
        <a href="#" class="hover:text-slate-900">Home</a>
        <a href="#" class="hover:text-slate-900">About Luciano Rowlands</a>
      </nav>

      <!-- Idiomas -->
      <div class="flex space-x-4 pt-2 text-sm text-slate-600">
        <button @click="changeLanguage('en')" class="hover:text-black">EN</button>
        <button @click="changeLanguage('pt')" class="hover:text-black">PT</button>
        <button @click="changeLanguage('es')" class="hover:text-black">ES</button>
      </div>
    </div>
  </header>
</template>
