<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="w-full bg-gradient-to-b from-slate-50 to-white py-12 px-6">
    <div class="max-w-5xl mx-auto flex flex-col items-center text-center space-y-10">

      <!-- CAMADA 1 — IMPACTO IMEDIATO -->
      <div class="flex flex-col items-center space-y-6">
        <img
          src="../../assets/images/luciano-rowlands-01.jpg"
          :alt="t('home.hero.layer1.image_alt')"
          class="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover shadow-md"
        />

        <div v-html="t('home.hero.layer1.core_phrase')" />

        <button
          class="mt-2 px-6 py-2 rounded-full border border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition"
        >
          {{ t('home.hero.layer1.main_button') }}
        </button>
      </div>

      <!-- CAMADA 2 — IDENTIDADE E BOAS-VINDAS -->
      <div class="max-w-3xl space-y-2">
        <div v-html="t('home.hero.layer2.presentation')" />
        <div v-html="t('home.hero.layer2.invitation')" />
      </div>

      <!-- CAMADA 3 — ORIENTAÇÃO + RELAÇÃO CONTÍNUA -->
      <div class="max-w-2xl space-y-2">
        <div v-html="t('home.hero.layer3.orientation')" />
        <div v-html="t('home.hero.layer3.alternative')" />
        <div v-html="t('home.hero.layer3.newsletter_call')" />

        <button
          class="mt-4 px-6 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-900 transition"
        >
          {{ t('home.hero.layer3.newsletter_button') }}
        </button>
      </div>

    </div>
  </section>
</template>
