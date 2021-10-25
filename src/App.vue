<script setup>
import { useDark, useToggle } from '@vueuse/core'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark" class="bg-gray-400 dark:bg-yellow-600">button</button>
</template>