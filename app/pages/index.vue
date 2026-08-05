<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">电教委员指南</h1>
          <p class="hero-subtitle">CN E Learning - 做一名优秀的电教委员</p>
          <div class="hero-actions">
            <a href="https://smartteachcn.yuque.com/zpgkmv/cnel"
            target="_blank" rel="noopener" class="btn">
              <Icon name="mdi:book-open-outline" size="20" />
              开始阅读
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="alert">
          <div class="alert-title">
            <Icon name="ph:lightbulb" size="20" />
            提示
          </div>
          <div class="alert-content">点击下方链接即可跳转至对应板块或相关业务。</div>
        </div>

        <section class="feedback-center">
          <h2 class="section-title">
            <Icon name="ph:info" size="32" />
            反馈中心
          </h2>
          <p class="section-note">我们确保每一个技术诉求都能得到回应，每一个进度都公开透明。</p>

          <table>
            <thead>
              <tr>
                <th>入口名称</th>
                <th>功能描述</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://smartteachcn.feishu.cn/share/base/form/shrcn6k83OBR7K80mZeiwvsOkdf" target="_blank" rel="noopener"><strong>现有文件修改建议收集表</strong></a></td>
                <td>提交文档改进建议</td>
                <td><a href="https://smartteachcn.feishu.cn/share/base/query/shrcnEsjKkHpC4zkYtDoZOiKNqg" target="_blank" rel="noopener">点此查询处理进度</a></td>
              </tr>
              <tr>
                <td><a href="https://smartteachcn.feishu.cn/share/base/form/shrcnXEF4ppmdMtZ4jkgBp9XgHd" target="_blank" rel="noopener"><strong>FAQ 文档征集</strong></a></td>
                <td>提交 FAQ 文档</td>
                <td><a href="https://smartteachcn.feishu.cn/share/base/query/shrcnFZjIGkiYQ1ExSVlLZ8EH4c" target="_blank" rel="noopener">点此查询审核进度</a></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="multi-union">
          <h2 class="section-title">
            <Icon name="ph:buildings" size="32" />
            多校联盟
          </h2>
          <div class="card">
            <ul class="link-list">
              <li>
                <a href="https://smartteachcn.feishu.cn/app/NWZnbEs9paQMmVsdOLFcrJF8n6b?pageId=pge9I1OesafFHSka" target="_blank" rel="noopener">联盟展示页</a>：查看当前已加入的成员学校。
              </li>
              <li>
                <a href="https://smartteachcn.feishu.cn/share/base/form/shrcnap8asfGtGOfAEE8IzQIDkh" target="_blank" rel="noopener">数据提交</a>：提交学校信息申请加入联盟。
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '电教委员指南 - 做一名优秀的电教委员',
  description: '电教委员指南 - 提供详细指南、多校联盟等服务，帮助电教员维护和管理电教设备',
  ogTitle: 'CNEL',
  ogDescription: '电教委员指南 - 提供详细指南、多校联盟等服务，帮助电教员维护和管理电教设备',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
.home::before {
  content: '';
  position: absolute;
  top: calc(-1 * var(--header-height));
  left: 50%;
  transform: translateX(-50%);
  width: min(700px, 90vw);
  height: min(700px, 90vw);
  background: radial-gradient(
    circle at 50% 50%,
    rgba(var(--color-primary-rgb), 0.12) 0%,
    rgba(var(--color-primary-rgb), 0.06) 45%,
    transparent 75%
  );
  filter: blur(8px);
  opacity: 0.9;
  pointer-events: none;
  z-index: 0;
}

.hero {
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: -0.03em;
  margin-bottom: var(--spacing-md);
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin-bottom: var(--spacing-md);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: var(--spacing-md);
}

.alert {
  background: rgba(var(--color-primary-rgb), 0.15);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
  margin: var(--spacing-sm) 0;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(var(--color-primary-rgb), 0.2);
}

.alert-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.alert-content {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.feedback-center,
.multi-union {
  margin: var(--spacing-lg) 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-text);
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.02em;
}

.section-note {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin: 0 0 var(--spacing-md);
}

table {
  width: 100%;
  border-collapse: collapse;
  background: var(--color-card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
  margin: var(--spacing-sm) 0;
}

thead {
  background: var(--color-bg-secondary);
}

th {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  font-weight: 600;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
}

td {
  padding: var(--spacing-sm) var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}

tbody tr {
  transition: background-color var(--transition);
}

tbody tr:hover {
  background: var(--color-bg-secondary);
}

tbody tr:last-child td {
  border-bottom: none;
}

table a {
  color: var(--color-primary);
  font-weight: 600;
  transition: color var(--transition);
}

table a:hover {
  color: var(--color-primary-hover);
}

.link-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.link-list li {
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  background: var(--color-bg-secondary);
}

.link-list svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.link-list a {
  color: var(--color-primary);
  font-weight: 600;
  transition: color var(--transition);
}

.link-list a:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}
</style>
