<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">电教委员指南</h1>
          <p class="hero-subtitle">CN E Learning - 做一名优秀的电教委员</p>
          <div class="hero-actions">
            <a  href="https://smartteachcn.yuque.com/zpgkmv/cnel"
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
          <div class="card-static">
            <ul class="link-list">
              <li>
                <Icon name="ph:link" size="20" />
                <a href="https://smartteachcn.feishu.cn/app/NWZnbEs9paQMmVsdOLFcrJF8n6b?pageId=pge9I1OesafFHSka" target="_blank" rel="noopener">联盟展示页</a>：查看当前已加入的成员学校。
              </li>
              <li>
                <Icon name="ph:link" size="20" />
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
/* 背景装饰光晕 */
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

@media (max-width: 768px) {
  .home::before {
    top: calc(-1 * var(--header-height));
  }
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

@keyframes pulse-badge {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
  margin-bottom: var(--spacing-md);
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4rem;
  }
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
}

.content-section {
  padding: var(--spacing-xl) 0;
}

.alert {
  background: rgba(var(--color-primary-rgb), 0.15);
  padding: 20px 24px;
  border-radius: var(--radius-lg);
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--color-primary-rgb), 0.2);
}

.alert:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-2px);
}

.alert-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.alert-content {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.feedback-center,
.multi-union {
  margin: 40px 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.section-note {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin: 0 0 24px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: var(--color-card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--color-border);
  margin: 20px 0;
}

thead {
  background: var(--color-bg-secondary);
}

th {
  padding: 16px 24px;
  text-align: left;
  font-weight: 600;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
}

td {
  padding: 16px 24px;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}

tbody tr {
  transition: all 0.3s ease;
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
  transition: color 0.3s ease;
}

table a:hover {
  color: var(--color-primary-light);
}

.link-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
}

.link-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  transition: all 0.3s ease;
}

.link-list li:hover {
  transform: translateX(4px);
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
  transition: color 0.3s ease;
}

.link-list a:hover {
  color: var(--color-primary-light);
  text-decoration: underline;
}
</style>
