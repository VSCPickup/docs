/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '关于我们', link: '/aboutus/' },
  { text: '每周推歌', link: '/weeklyPickup/' },
  { text: '比赛', link: '/vof/' },
])
