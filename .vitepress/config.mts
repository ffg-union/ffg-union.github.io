import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '凌远地理社',
  description: '山东师范大学附属中学·凌远地理社是一个学科类社团，在“充满干货”的活动中，也有每一位行路人的彼此照亮。在这里，我们可以成为灯塔（主讲人），向大家讲解地理知识，分享学习乐趣；在这里，我们可以成为叶群（学习者），彼此讨论，相互答疑，提出问题，帮助他人；在这里，我们可以成为旅鸟（研学者），探寻自然的奥秘，感受魅力的人文。',

  themeConfig: {
    logo: '/assets/logo.png',

    outlineTitle: '概述',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '浅色主题',
    darkModeSwitchTitle: '深色主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索...' },
              modal: {
                displayDetails: '显示细节',
                resetButtonTitle: '清除查询条件',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  
    notFound: {
      title: '糟糕，你进入了一片无人涉足的地方',
      quote: '但没关系，每一次的开拓，都是一盏小小的灯，为后人指明方向。在这里，同志同道合的行路人们，开拓一片新天地，不断探索，勇往直前。',
      linkLabel: '回到主页',
      linkText: '回到主页',
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '成员', link: '/members' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: { svg: readFileSync('./public/assets/qq.svg', 'utf-8') }, link: 'https://qm.qq.com/q/3avIbBzvzO' }
    ]
  }
})
