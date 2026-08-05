<template>
  <button
    class="icon-btn"
    :aria-label="!colorMode.unknown && colorMode.value === 'dark' ? '深色模式' : '浅色模式'"
    @click="toggleTheme"
  >
    <Icon v-if="!colorMode.unknown && colorMode.value === 'dark'" name="ri:moon-fill" size="20" />
    <Icon v-else name="ri:sun-fill" size="20" />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
