<template>
  <button
    class="theme-toggle"
    :aria-label="colorMode.value === 'dark' ? '深色模式' : '浅色模式'"
    @click="toggleTheme"
  >
    <Icon v-if="colorMode.value === 'dark'" name="ri:moon-fill" size="20" />
    <Icon v-else name="ri:sun-fill" size="20" />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background-color: transparent;
  color: var(--color-text);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-toggle:hover {
  background-color: var(--color-bg-secondary);
}
</style>
