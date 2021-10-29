<script setup>
import { ref } from 'vue'

let code = ref('')
let displayMessage = ref('')

const locations = ref({
  library: '8217', // legacy
  study: '9534', // ridge
  ballroom: '4162', // billing
  lounge: '6829', // lobby
  hall: '9425', // vista
  conservatory: '7582', // summit
  'library/': '8217', // legacy
  'study/': '9534', // ridge
  'ballroom/': '4162', // billing
  'lounge/': '6829', // lobby
  'hall/': '9425', // vista
  'conservatory/': '7582' // summit
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
    displayMessage.value = 'Wrong code, try again.'
  }
}
</script>

<template>
  <div v-if="$route.path === '/' || $route.path === ''">
    Nothing to see here.
  </div>
  <template v-else>
    <transition
      enter-active-class="transition-all duration-1000 ease-out-quad"
      leave-active-class="transition-all duration-1000 ease-in-quad"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <h1 class="text-3xl bg-yellow-300 text-black h-96 shadow-lg w-96 flex justify-center items-center p-6 font-scary leading-10" v-if="displayMessage">
        {{ displayMessage }}
      </h1>
    </transition>
    <form class="flex flex-col items-center" @submit.prevent="checkForm($route.path, code)" v-if="!displayMessage">
      <div class="block relative bg-gray-700 border-gray-200 shadow-2xl rounded-lg border-4 p-10 w-96">
        <div class="security-code-wrap flex items-center justify-center">
          <label for="code-field">
            <ul class="justify-center m-0 p-0 flex">
              <li class="block list-none w-10 h-10 text-base leading-10 bg-white m-1 text-black" v-for="(item, index) in 4" :key="index">
                {{code[index] || '-'}}
              </li>
            </ul>
          </label>
          <input ref="input" class="input-code" v-model="code" id="code-field" name="code-field" type="tel" maxlength="4" autocorrect="off" autocomplete="off" autocapitalize="off">
        </div>
      </div>
      <button 
        type="submit"
        :disabled="code.length < 4"
        :class="code.length === 4 ? 'bg-yellow-600 hover:bg-yellow-500 border-yellow-700 hover:border-yellow-600' : 'bg-gray-400 border-gray-500 pointer-events-none'" 
        class="border-b-4 text-white text-center py-3 px-5 rounded font-bold text-3xl mt-6 relative z-20 shadow-sm transition-colors">UNLOCK</button>
    </form>
  </template>
</template>

<style scoped lang="scss">
.input-code {
  position: absolute;
  left: -9999px;
  top: -9999px;
}
</style>
