<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <h1>{{ error.statusCode }}</h1>
        <p class="error-message">{{ error.message }}</p>
        <NuxtLink to="/" class="btn">
          <Icon name="ph:house" />
          首页
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.error-page::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(var(--color-primary-rgb), 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.error-content {
  position: relative;
  z-index: 1;
}

.error-content h1 {
  font-size: 8rem;
  font-weight: 900;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.05em;
  line-height: 1;
}

.error-message {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}
</style>
