<template>
  <div class="team">
    <div class="container">
      <div class="page-header">
        <h1>团队</h1>
      </div>

      <div class="grid grid-3">
        <div v-for="member in members" :key="member.name" class="card-static member-card">
          <img :src="member.avatar" :alt="member.name" class="member-avatar" />
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <div class="member-links">
              <a v-if="member.githubName" :href="`https://github.com/${member.githubName}`" target="_blank" rel="noopener">
                <Icon name="mdi:github" size="25" />
              </a>
              <a v-if="member.email" :href="`mailto:${member.email}`">
                <Icon name="mdi:email-outline" size="25" />
              </a>
              <a v-if="member.bilibili" :href="member.bilibili" target="_blank" rel="noopener">
                <Icon name="ri:bilibili-fill" size="22" />
              </a>
              <a v-if="member.website" :href="member.website" target="_blank" rel="noopener">
                <Icon name="ph:globe" size="25" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Member {
  name: string
  avatar: string
  role: string
  githubName?: string
  email?: string
  bilibili?: string
  website?: string
}

const members: Member[] = [
  {
    name: 'Peter267',
    avatar: '/images/avatar/Peter.jpg',
    role: '创始人',
    githubName: 'Peter267',
    email: 'peter267@smart-teach.cn'
  },
  {
    name: 'jiangyin14',
    avatar: '/images/avatar/jiangyin.jpg',
    role: '首席执行官',
    githubName: 'jiangyin14',
    email: 'jiangyin14@smart-teach.cn',
    bilibili: 'https://space.bilibili.com/493626152',
    website: 'https://blog.jiangyin14.top/'
  },
  {
    name: 'Miraculy',
    avatar: '/images/avatar/Miraculy.jpg',
    role: '团队成员',
    githubName: 'Miraculy',
    email: 'weizhizhuang@smart-teach.cn'
  },
  {
    name: 'Jursin',
    avatar: '/images/avatar/Jursin.jpg',
    role: '团队成员',
    githubName: 'Jursin',
    email: 'jursin@126.com',
    bilibili: 'https://space.bilibili.com/1575907920',
    website: 'https://blog.jursin.top'
  },
  {
    name: '溪夏坡Zpcin',
    avatar: '/images/avatar/Zpcin.jpg',
    role: '团队成员',
    githubName: 'Zpcin',
    email: 'zpcin@smart-teach.cn'
  },
  {
    name: 'Lyang1273',
    avatar: '/images/avatar/Lyang.jpg',
    role: '团队成员',
    githubName: 'Lyang1273',
    email: 'lyang1273@smart-teach.cn'
  },
  {
    name: '过客是个铁憨憨',
    avatar: '/images/avatar/gksgthh.jpg',
    role: '团队成员',
    githubName: 'gksgthh',
    email: 'codehzh@smart-teach.cn'
  },
  {
    name: '姐里 / sisJer',
    avatar: '/images/avatar/Jerry.jpg',
    role: '团队成员',
    githubName: 'JerryZeng20142',
    email: 'jerry20142@smart-teach.cn'
  },
  {
    name: '不吃胡萝卜的兔子',
    avatar: '/images/avatar/不吃胡萝卜的兔子.jpg',
    role: '团队成员',
    githubName: 'rrrrrruaaaaa',
    email: 'pickybunny@smart-teach.cn',
    bilibili: 'https://space.bilibili.com/342739802'
  },
  {
    name: 'kajolno',
    avatar: '/images/avatar/kajolno.jpg',
    role: '团队成员',
    email: 'kajolno@smart-teach.cn'
  },
  {
    name: '下班快乐',
    avatar: '/images/avatar/下班快乐.jpg',
    role: '团队成员',
    email: 'sgx505079@smart-teach.cn'
  },
  {
    name: 'RukaaX',
    avatar: '/images/avatar/RukaaX.jpg',
    role: '团队成员',
    email: 'rukaax@smart-teach.cn'
  },
  {
    name: '爆料酱',
    avatar: '/images/avatar/爆料酱.jpg',
    role: '团队成员'
  }
]

useSeoMeta({
  title: '团队 | CNEL',
  description: '认识 CNEL 团队'
})
</script>

<style scoped>
.team {
  min-height: 60vh;
}

.page-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--spacing-2xl);
}

.page-header h1 {
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.03em;
}

.member-card {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: var(--spacing-md);
  position: relative;
  overflow: hidden;
}

.member-avatar {
  width: 80px;
  height: auto;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  align-self: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.member-card:hover .member-avatar {
  transform: scale(1.08);
  box-shadow: 0 8px 20px rgba(var(--color-primary-rgb), 0.2);
}

.member-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.member-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0;
  transition: color 0.3s ease;
}

.member-card:hover h3 {
  color: var(--color-primary);
}

.member-role {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
}

.member-links {
  display: flex;
  gap: var(--spacing-sm);
}

.member-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  background: var(--color-bg-secondary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.member-links a:hover {
  transform: translateY(-3px);
  color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.2);
}
</style>
