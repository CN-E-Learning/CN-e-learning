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
        <span v-if="description" class="bulletin-lead">
          {{ description }}
        </span>
      </div>

      <div class="bulletin-content card">
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
  color: var(--color-text);
}

.bulletin-back {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-sm);
}

.bulletin-lead {
  display: inline-block;
  text-align: left;
  color: var(--color-text-secondary);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-xs);
  padding-left: 14px;
  border-left: 3px solid var(--color-primary);
}

.bulletin-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-xs);
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.75rem;
  color: var(--color-text);
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.85rem;
}

.bulletin-content :deep(h2) {
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
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
  transition: color var(--transition);
}

.bulletin-content :deep(a:hover) {
  text-decoration: underline;
}
</style>
