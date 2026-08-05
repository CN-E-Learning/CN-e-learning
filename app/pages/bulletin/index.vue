<template>
  <div class="bulletin">
    <div class="container">
      <PageHeader title="公告" subtitle="了解团队最新动态与计划" />

      <div class="bulletin-list">
        <div
          v-for="item in bulletinsData"
          :key="item.slug"
          class="card"
        >
          <div class="bulletin-card-header">
            <h3>{{ item.title }}</h3>
            <span class="bulletin-date">
              <Icon name="ph:calendar" size="16" />
              {{ item.date }}
            </span>
          </div>
          <p class="bulletin-description">
            {{ item.description }}
          </p>
          <NuxtLink
            :to="`/bulletin/${item.slug}`"
            class="bulletin-readmore"
          >
            查看详情
            <Icon name="ph:arrow-right" size="16" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bulletinsData from '~/data/bulletins.json'

useSeoMeta({
  title: '公告 | CNEL',
  description: '了解团队最新动态与计划'
})
</script>

<style scoped>
.bulletin {
  min-height: 60vh;
}

.bulletin-list {
  display: grid;
  gap: var(--spacing-lg);
  grid-template-columns: 1fr;
}

.bulletin-card-header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  color: var(--color-text);
}

.bulletin-date {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
}

.bulletin-description {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.bulletin-readmore {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: auto;
  align-self: flex-end;
  position: relative;
  padding-bottom: 0.15rem;
}

.bulletin-readmore::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition);
}

.bulletin-readmore:hover::after {
  transform: scaleX(1);
}
</style>
