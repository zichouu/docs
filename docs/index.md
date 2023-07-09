---
layout: home
title: '首页'

hero:
  name: zichou docs
  text: 我写的一些文档
  tagline: 
  image:
    src: logo.png
    alt: 图片
  actions:
    - theme: brand
      text: 开始阅读
      link: /wfhosts
    - theme: alt
      text: WFTime
      link: https://zichou.eu.org/wftime

# features:
#   - icon: ⚡️
#     title: Vite, The DX that can't be beat
#     details: Lorem ipsum...
#   - icon: 🖖
#     title: Power of Vue meets Markdown
#     details: Lorem ipsum...
#   - icon: 🛠️
#     title: Simple and minimal, always
#     details: Lorem ipsum...
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import bili from '.vitepress/svg/bili'

const members = [
  {
    avatar: 'https://dn-qiniu-avatar.qbox.me/avatar/5b31ea74de0da0c0f1f8849d31420091',
    name: 'zichou',
    title: '',
    links: [
      { icon: 'github', link: 'https://github.com/zichouu' },
      {
        icon: {
          svg: bili
        },
        link: 'https://space.bilibili.com/11786852'
      }
    ]
  },
]
</script>

<div style="margin-top: 16px">
  <VPTeamMembers size="small" :members="members" />
</div>
