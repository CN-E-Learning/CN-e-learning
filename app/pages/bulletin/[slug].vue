<template>
  <BulletinArticle v-if="currentBulletin" :title="currentBulletin.title" :date="currentBulletin.date" :description="currentBulletin.description">
    <div v-html="htmlContent" />
  </BulletinArticle>
</template>

<script setup lang="ts">
import bulletinsData from '~/data/bulletins.json'
const route = useRoute()

const currentBulletin = computed(() => {
  const bulletinData = bulletinsData.find(b => b.slug === route.params.slug)
  if (!bulletinData) return null

  return {
    title: bulletinData.title,
    description: bulletinData.description,
    date: bulletinData.date,
    contentPath: bulletinData.contentPath
  }
})

const htmlContent = ref('')

const loadBulletinContent = async () => {
  if (!currentBulletin.value) return

  try {
    const response = await fetch(currentBulletin.value.contentPath)

    if (!response.ok) {
      throw new Error(`Failed to load bulletin content: ${response.status}`)
    }

    htmlContent.value = await response.text()
  } catch (error) {
    console.error('Failed to load bulletin content:', error)
    htmlContent.value = ''
  }
}

onMounted(loadBulletinContent)

if (!currentBulletin.value) {
  throw createError({ statusCode: 404, statusMessage: '公告不存在' })
}
</script>
