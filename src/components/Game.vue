<script setup>
import { ref } from 'vue'

let code = ref('')
let displayMessage = ref('')

const locations = ref({
  legacy: '8217',
  ridge: '9534',
  billing: '4162',
  lobby: '6829',
  vista: '9425',
  summit: '7582'
})

const messages = ref({
  '8217': 'Jen Bourne with the Decorative Vase in Legacy.',
  '9534': 'Maverick with the Hole Punch in Ridge.',
  '4162': 'Dana with a Paper Cutter in Billing.',
  '6829': 'Edwyn with the Thermometer in the Lobby.',
  '9425': 'Jason with the Coffee Maker in Vista.',
  '7582': 'Nik with the Clock in Summit'
})

function checkForm(path, check) {
  if (messages.value[check] && locations.value[path.substring(1)] === check) {
    displayMessage.value = messages.value[check]
  } else {
    displayMessage.value = 'You look, but don’t see anything here. Maybe the next clue will yield some results.'
  }
}

function changeValue(e) {
  // console.log(e, code.value.length, e.target.value.length)
  if (e.target.value.length === 4) {
    e.target.blur()
  }
}
</script>

<template>
  <div v-if="$route.path === '/' || $route.path === ''">
    Nothing to see here.
  </div>
  <h1 class="text-3xl bg-yellow-300 text-black h-96 shadow-lg w-96 flex justify-center items-center p-6" v-else-if="displayMessage">{{ displayMessage }}</h1>
  <form class="flex flex-col items-center" @submit.prevent="checkForm($route.path, code)" v-else>
    <div class="block relative bg-gray-700 border-gray-200 shadow-2xl rounded-lg border-4 p-10 w-96">
      <input v-model="code" type="text" required  pattern="[0-9]{4}" class="flex bg-transparent text-black z-10 relative h-16 outline-none max-w-full" style="font-size: 36px; letter-spacing: 60px; left: 18px;" @keyup="changeValue" />
      <div class="pointer-events-none absolute inset-0 flex items-center p-10 space-x-2">
        <span class="w-1/4 h-16 bg-white"></span>
        <span class="w-1/4 h-16 bg-white"></span>
        <span class="w-1/4 h-16 bg-white"></span>
        <span class="w-1/4 h-16 bg-white"></span>
      </div>
    </div>
    <button type="submit" class="bg-red-500 hover:bg-red-400 border-b-4 border-red-700 hover:border-red-500 text-white text-center py-2 px-4 rounded font-bold text-2xl mt-6">UNLOCK</button>
  </form>
</template>