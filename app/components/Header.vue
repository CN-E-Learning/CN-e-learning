<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <NuxtLink to="/" class="logo">
          <img src="/logo.png" alt="logo" height="26" style="margin-right: 8px;" />
          <span class="logo-text">电教委员指南</span>
        </NuxtLink>

        <!-- 桌面端导航 -->
        <div class="nav-links">
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
          <a href="https://github.com/CN-E-Learning" target="_blank" rel="noopener" class="icon-btn">
            <Icon name="mdi:github" size="24" />
          </a>
          <ThemeToggle />
          <button class="icon-btn mobile-menu-btn" @click="toggleMobileMenu">
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
  background: var(--header-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--header-border);
  transition: background-color var(--transition), border-color var(--transition);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  gap: var(--spacing-xs);
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  transition: transform var(--transition);
}

.logo-text {
  color: var(--color-primary);
  letter-spacing: 0.02em;
  font-size: 18px;
}

.nav-links {
  display: none;
  gap: var(--spacing-sm);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  transition: color 0.2s ease, background-color 0.2s ease;
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
  gap: var(--spacing-xs);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md) 0;
  border-top: 1px solid var(--color-border);
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: var(--spacing-sm) var(--spacing-xs);
  font-weight: 500;
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  transition: color var(--transition), background-color var(--transition);
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
  transition: opacity var(--transition), transform var(--transition);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }

  .mobile-menu-btn {
    display: none;
  }

  .mobile-nav {
    display: none;
  }

  .logo-text {
    font-size: 20px;
  }
}
</style>
