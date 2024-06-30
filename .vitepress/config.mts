import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '凌远地理社',
  themeConfig: {
    logo: '/asserts/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '成员', link: '/members' }
    ],
    outlineTitle: "概述",

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
      { icon: { svg: readFileSync('/asserts/qq.svg', 'utf-8') }, link: 'https://qm.qq.com/q/3avIbBzvzO' }
    ]
  }
})
