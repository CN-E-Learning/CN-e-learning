<template>
  <article class="bulletin-article">
    <div class="container">
      <div class="page-header bulletin-header">
        <div class="bulletin-back">
          <NuxtLink :to="backTo" class="btn btn-ghost">
            <Icon name="ph:arrow-left" size="18" />
            返回公告列表
          </NuxtLink>
        </div>
        <h1>{{ title }}</h1>
        <div class="bulletin-meta">
          <span class="meta-item">
            <Icon name="ph:calendar" size="16" />
            {{ date }}
          </span>
          <slot name="meta" />
        </div>
        <p v-if="description" class="bulletin-description" style="padding-left:
        14px; border-left: 3px solid var(--color-primary);">
          {{ description }}
        </p>
      </div>

      <div class="bulletin-content card-static">
        <slot />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    title: string
    date: string
    description?: string
    backTo?: string
  }>(),
  {
    description: '',
    backTo: '/bulletin'
  }
)

const { title, date, description, backTo } = toRefs(props)
</script>

<style scoped>
.bulletin-article {
  min-height: 60vh;
}

.bulletin-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.bulletin-header h1 {
  letter-spacing: -0.03em;
}

.bulletin-back {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-sm);
}

.bulletin-description {
  color: var(--color-text-secondary);
  font-size: 1.125rem;
  margin: var(--spacing-xs) auto;
}

.bulletin-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.75rem;
  background: var(--color-bg-secondary);
  border-radius: 9999px;
  font-size: 0.85rem;
}

.bulletin-content :deep(h2) {
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
  letter-spacing: -0.02em;
}

.bulletin-content :deep(h3) {
  margin-top: var(--spacing-md);
  margin-bottom: var(--spacing-xs);
  font-size: 1.2rem;
}

.bulletin-content :deep(p) {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 0.4rem;
}

.bulletin-content {
  overflow-wrap: anywhere;
  word-break: break-word;
}

.bulletin-content :deep(ul),
.bulletin-content :deep(ol) {
  padding-left: 1.2rem;
  margin-bottom: 0.4rem;
  color: var(--color-text-secondary);
}

.bulletin-content :deep(li) {
  margin-bottom: 0.4rem;
}

.bulletin-content :deep(a) {
  color: var(--color-primary);
  transition: all 0.2s ease;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.bulletin-content :deep(a:hover) {
  text-decoration: underline;
}
</style>
