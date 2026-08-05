<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-brand-title">电教委员指南</div>
          <div class="footer-copyright">
            <p>© 2025-{{ currentYear }} 电教委员指南 | 智教联盟提供技术支持</p>
            <p>
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
                津ICP备2025035356号-10
              </a>
            </p>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-section">
            <p class="col-title">联系我们</p>
            <a href="mailto:cnel@smart-teach.cn">
              <Icon name="mdi:email" /> 邮箱
            </a>
            <a href="https://qm.qq.com/q/AqmnvwX8iW" target="_blank" rel="noopener">
              <Icon name="ri:qq-fill" /> QQ 群
            </a>
            <a href="https://forum.smart-teach.cn/t/CNEL" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
              viewBox="0 0 24 24"><g fill="none"><path d="M12.593
              23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02
              0 0
              0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"/><path
              fill="currentColor" d="M15.08 4.21s-.71-.4-1.4-.2L2.32 7.23 5.34
              1.84s.44-.88 2.15-.84l9.49.02-1.82 3.24-.08-.05Zm3.76-2.18l-1.93
              3.44s.48.45.62.97l1.69 6.6-6.52 2.02
              2.35-3.83-.73-2.89s-.38-1.14-1.5-1.01c-.02 0-.04 0-.05
              0-1.16.18-11.89 3.23-11.89 3.23 0 0-.84.24-.88 1.1 0 0-.02.93.53
              1.78l4.76 8.35 1.75-3.12s-.55-.51-.61-.77l-1.92-7.01
              6.45-1.88s.35-.18.49.13l-2.81 3.6.96 3.22s.42.71
              1.4.71l12.39-3.47s.82-.16.59-1.43c0 0
              .04-.47-.35-1.25l-4.77-8.51Z"/><path fill="var(--icon-secondary,
              currentColor)" d="M8.7 19.69s.66.29 1.09.27l11.97-3.36-2.75
              4.9s-.67 1.37-2.26 1.37l-9.9.14 1.85-3.31Z"/></g></svg> 论坛板块
            </a>
          </div>

          <div class="footer-section">
            <p class="col-title">友情链接</p>
            <a href="https://forum.smart-teach.cn/" target="_blank" rel="noopener">智教联盟论坛</a>
            <a href="https://aiwb.smart-teach.cn/" target="_blank" rel="noopener">Awesome IWB</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: var(--spacing-lg) 0;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg-footer);
  position: relative;
}

.footer-content {
  display: grid;
  gap: var(--spacing-xl);
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr 2fr;
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.footer-brand-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

.footer-copyright {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  font-size: 0.8rem;
  color: var(--color-text-secondary);
}

.footer-copyright a {
  color: var(--color-text-secondary);
  transition: color 0.2s ease;
  text-decoration: underline;
}

.footer-copyright a:hover {
  color: var(--color-primary);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-lg);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.footer-section .col-title {
  font-size: 1em;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.footer-section a {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  transition: color var(--transition);
  padding: 0.15rem 0;
}

.footer-section a:hover {
  color: var(--color-primary-hover);
}
</style>
