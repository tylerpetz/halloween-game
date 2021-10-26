<script setup>
import { ref } from 'vue'

let code = ref('1111')
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
</script>

<template>
  <div v-if="$route.path === '/' || $route.path === ''">
    Nothing to see here.
  </div>
  <form class="block" @submit.prevent="checkForm($route.path, code)" v-else>
    <div class="relative">
      <input v-model="code" type="text" required maxlength="4" pattern="[0-9]{4}" class="bg-white dark:bg-gray-900" />
    </div>
    <button type="submit">submit</button>
  </form>
  <h1 class="text-xl" v-if="displayMessage">{{ displayMessage }}</h1>
</template>