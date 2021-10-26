<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const isDark = useDark()
const toggleDark = useToggle(isDark)

let code = ref('1111')
let displayMessage = ref('')

const messages = ref({
  '8217': 'Jen Bourne with the Decorative Vase in Legacy.',
  '9534': 'Maverick with the Hole Punch in Ridge.',
  '4162': 'Dana with a Paper Cutter in Billing.',
  '6829': 'Edwyn with the Thermometer in the Lobby.',
  '9425': 'Jason with the Coffee Maker in Vista.',
  '7582': 'Nik with the Clock in Summit'
})

function checkForm() {
  // short loading timer
  //
  if (messages.value[code.value]) {
    displayMessage.value = messages.value[code.value]
  } else {
    displayMessage.value = 'Sorry, that code is no good.'
  }
}
</script>

<template>
  <main class="text-center">
    <form class="block" @submit.prevent="checkForm">
      <input v-model="code" type="text" required maxlength="4" pattern="[0-9]{4}" class="bg-white dark:bg-gray-900" />
      <button type="submit">submit</button>
    </form>
    <h1 class="text-2xl" v-if="displayMessage">{{ displayMessage }}</h1>
    <button type="button" @click="toggleDark" class="fixed bottom-2 right-2 text-gray-800 dark:text-gray-200">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  </main>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>