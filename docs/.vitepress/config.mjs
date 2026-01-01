import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
import mdItCustomAttrs from 'markdown-it-custom-attrs'
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'

export default defineConfig({
  title: '电教委员指南',
  description: '教你如何做一名优秀的电教委员',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: "stylesheet", href: "https://cdn.jsdmirror.com/npm/@fancyapps/ui/dist/fancybox.css" }],
    ['script', { src: "https://cdn.jsdmirror.com/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
    // Umami 统计脚本
    ['script', {
      defer: true,
      src: 'https://umami.peter267.dpdns.org/script.js',
      'data-website-id': 'ac648300-d79f-46a2-bc8e-a818cf6e2af2'
    }]
  ],

  markdown: {
    config: (md) => {
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      });
      md.use(markdownItTaskCheckbox);
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      };
    },
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

  themeConfig: {
    logo: '/logo.png',
    nav: [
      
    ],
    // 侧边栏配置
    sidebar: generateSidebar({
      /*
       * For detailed instructions, see the links below:
       * https://vitepress-sidebar.cdget.com/zhHans/guide/options
       */
      documentRootPath: '/docs',
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      collapsed: true,
      collapseDepth: 2,
      sortFolderTo: 'top',
      sortMenusByFrontmatterOrder: true,
      manualSortFileNameByPriority: ['guide', 'faq', 'school'],
      excludeByGlobPattern: ['**/list', 'friendLinks.md', 'tags.md',],
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CN-E-Learning/CN-e-learning' },
      { icon: 'qq', link: 'https://qm.qq.com/q/XOabZnlEMm' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"/><path fill="currentColor" d="M15.08 4.21s-.71-.4-1.4-.2L2.32 7.23 5.34 1.84s.44-.88 2.15-.84l9.49.02-1.82 3.24-.08-.05Zm3.76-2.18l-1.93 3.44s.48.45.62.97l1.69 6.6-6.52 2.02 2.35-3.83-.73-2.89s-.38-1.14-1.5-1.01c-.02 0-.04 0-.05 0-1.16.18-11.89 3.23-11.89 3.23 0 0-.84.24-.88 1.1 0 0-.02.93.53 1.78l4.76 8.35 1.75-3.12s-.55-.51-.61-.77l-1.92-7.01 6.45-1.88s.35-.18.49.13l-2.81 3.6.96 3.22s.42.71 1.4.71l12.39-3.47s.82-.16.59-1.43c0 0 .04-.47-.35-1.25l-4.77-8.51Z"/><path fill="var(--icon-secondary, currentColor)" d="M8.7 19.69s.66.29 1.09.27l11.97-3.36-2.75 4.9s-.67 1.37-2.26 1.37l-9.9.14 1.85-3.31Z"/></g></svg>'
        },
        link: 'https://forum.smart-teach.cn/d/701'
      }
    ],

    footer: {
      message: '<span style="display: inline-flex; align-items: center; gap: 4px;"><img src="/images/miit.webp" alt="miit" width="14" height="14" style="vertical-align: middle;" /> <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">津ICP备2025035356号 - 10</a></span> | <span style="display: inline-flex; align-items: center; gap: 4px;"><img src="/images/stcn.png" alt="stcn" width="14" height="14" style="vertical-align: middle;" /> <a href="https://www.smart-teach.cn/" target="_blank" rel="noopener noreferrer">智教联盟提供技术支持</a></span>',
      copyright: '<span class="copyright" style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 4px;">本文档采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display: inline-flex; align-items: center; gap: 4px;">CC-BY-NC-SA 4.0 许可<img style="height:22px!important;vertical-align:middle;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;vertical-align:middle;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;vertical-align:middle;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;vertical-align:middle;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a>发布 | 版权所有 © 2025 电教委员指南</span>'
    },

    outline: {
      level: 'deep',
      label: '页面导航'
    },
    editLink: {
      pattern: 'https://github.com/CN-E-Learning/CN-e-learning/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    //Algolia搜索
    search: {
      provider: 'algolia',
      options: {
        appId: 'WKRPSXHOXG',
        apiKey: 'b2935f5a1b0b0c6e6917bbe4b58494c2',
        indexName: 'guide',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                },
              },
            },
          },
        },
      },
    },
  },

  cleanUrls: false,
  appearance: true,
  lastUpdated: true
})
