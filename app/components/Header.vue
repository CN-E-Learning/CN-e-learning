<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <NuxtLink to="/" class="logo">
          <img src="/logo.png" alt="logo" height="26" style="margin-right: 8px;" />
          <span class="logo-text">电教委员指南</span>
        </NuxtLink>

        <!-- 桌面端导航 -->
        <div class="nav-links desktop">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
          >
            <Icon :name="item.icon" size="18" />
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- 操作按钮 -->
        <div class="nav-actions">
          <a href="https://github.com/CN-E-Learning" target="_blank" rel="noopener" class="nav-action-btn">
            <Icon name="mdi:github" size="24" />
          </a>
          <ThemeToggle />
          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <Icon :name="mobileMenuOpen ? 'ph:x' : 'ph:list'" size="24" />
          </button>
        </div>
      </nav>

      <!-- 移动端导航 -->
      <Transition name="mobile-menu">
        <div v-if="mobileMenuOpen" class="mobile-nav">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="mobile-nav-link"
            @click="toggleMobileMenu"
          >
            <Icon :name="item.icon" size="20" />
            {{ item.name }}
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/', icon: 'ph:house' },
  { name: '公告', path: '/bulletin', icon: 'ph:newspaper' },
  { name: '团队', path: '/team', icon: 'ph:users' },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// 路由改变时关闭移动端菜单
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(248, 250, 252, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark .header {
  background: rgba(15, 23, 42, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  gap: var(--spacing-md);
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo:hover {
  transform: scale(1.03);
  color: var(--color-text);
}

.logo-text {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.02em;
}

.nav-links {
  display: flex;
  gap: var(--spacing-sm);
}

.nav-links.desktop {
  display: none;
}

@media (min-width: 768px) {
  .nav-links.desktop {
    display: flex;
  }
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--color-text);
  background-color: var(--color-bg-secondary);
}

.nav-link.router-link-active {
  color: var(--color-primary);
  background-color: rgba(var(--color-primary-rgb), 0.08);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--color-text);
  background-color: transparent;
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.nav-action-btn:hover {
  background-color: var(--color-bg-secondary);
}

.mobile-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--color-text);
  background-color: transparent;
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background-color: var(--color-bg-secondary);
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;
  }
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md) 0;
  border-top: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: var(--spacing-sm) var(--spacing-xs);
  font-weight: 500;
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-link:hover {
  color: var(--color-text);
  background-color: var(--color-bg-secondary);
}

.mobile-nav-link.router-link-active {
  color: var(--color-primary);
  background-color: rgba(var(--color-primary-rgb), 0.08);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
