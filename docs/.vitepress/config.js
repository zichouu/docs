// import bili from './svg/bili'
module.exports = {
    title: 'zichou docs',
    lang: 'zh',
    description: '',
    lastUpdated: false,
    cleanUrls: true,
    // locales: {
    //     root: {
    //         label: 'Chinese',
    //         lang: 'zh',
    //         title: 'zichou docs',
    //         description: '',
    //         head: [
    //             ['link', { rel: 'icon', href: '/favicon.ico' }]
    //         ],
    //     }
    // },
    themeConfig: {
        logo: '/logo.png',
        outline: 'deep',
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        outlineTitle: '本页内容',
        nav: [
            {text: '首页', link: '/'},
            {text: '开始阅读', link: '/wfqd'},
            {
                text: '链接',
                items: [
                    {
                        text: '我的网站',
                        items: [
                            {text: 'zichou.eu.org', link: 'https://zichou.eu.org/wftime'},
                        ]
                    },
                    {
                        text: 'Dev',
                        items: [
                            {text: 'VitePress', link: 'https://vitepress.dev/reference/site-config'},
                        ],
                    },
                    {
                        text: '测试页面',
                        items: [
                            {text: 'Test', link: '/test'},
                        ],
                    },
                ],
            },
        ],
        sidebar: [
            {
                text: 'Warframe',
                items: [
                    {text: '启动和结束', link: '/wfqd'},
                    {text: '设置备份', link: '/wfsetting'},
                    {text: 'EE.log', link: '/wflog',},
                    {text: 'Hosts (过时)', link: '/wfhosts',},
                ],
            },
            {
                text: 'Minecraft',
                items: [
                    {text: '服务端配置', link: '/mcserver',},
                ],
            },
            {
                text: '配置',
                items: [
                    {text: 'Windows', link: '/windows'},
                    {text: 'PowerShell', link: '/ps1'},
                    {text: 'NVIDIA', link: '/nvidia'},
                    {text: 'nginx', link: '/nginx'},
                    {text: 'TAURI', link: '/tauri'},
                    {text: 'Proxifier', link: '/proxifier'},
                ],
            },
            {
                text: '备忘',
                items: [
                    {text: 'FFmpeg', link: '/ffmpeg'},
                    {text: 'Git', link: '/git'},
                    {text: 'adb', link: '/adb'},
                ],
            },
        ],
        editLink: {
            pattern: 'https://github.com/zichouu/docs/tree/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档',
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        displayDetails: '显示细节',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭',
                        }
                    }
                }
            }
        },
        // algolia: {
        //     appId: 'WSZPG0QLRV',
        //     apiKey: '536e67817747faccc9a781d96184a121',
        //     indexName: 'zpages',
        //     placeholder: '请输入关键词',
        //     translations: {
        //         button: {
        //             buttonText: '搜索文档',
        //             buttonAriaLabel: '搜索文档',
        //         },
        //         modal: {
        //             searchBox: {
        //                 resetButtonTitle: '清除查询条件',
        //                 resetButtonAriaLabel: '清除查询条件',
        //                 cancelButtonText: '取消',
        //                 cancelButtonAriaLabel: '取消',
        //             },
        //             startScreen: {
        //                 recentSearchesTitle: '搜索历史',
        //                 noRecentSearchesText: '没有搜索历史',
        //                 saveRecentSearchButtonTitle: '保存至搜索历史',
        //                 removeRecentSearchButtonTitle: '从搜索历史中移除',
        //                 favoriteSearchesTitle: '收藏',
        //                 removeFavoriteSearchButtonTitle: '从收藏中移除',
        //             },
        //             errorScreen: {
        //                 titleText: '无法获取结果',
        //                 helpText: '你可能需要检查你的网络连接',
        //             },
        //             footer: {
        //                 selectText: '选择',
        //                 navigateText: '切换',
        //                 closeText: '关闭',
        //                 searchByText: '搜索提供者',
        //             },
        //             noResultsScreen: {
        //                 noResultsText: '无法找到相关结果',
        //                 suggestedQueryText: '你可以尝试查询',
        //                 reportMissingResultsText: '你认为该查询应该有结果？',
        //                 reportMissingResultsLinkText: '点击反馈',
        //             },
        //         },
        //     }
        // },
        socialLinks: [
            // {
            //     icon: {
            //         svg: bili
            //     },
            //     link: 'https://space.bilibili.com/11786852' 
            // },
            {
                icon: 'github',
                link: 'https://github.com/zichouu/docs'
            }
        ],
    },
    head: [
        [
            'script',
            { id: 'register-sw' },
            `;(() => {
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js')
              }
            })()`
        ]
    ],
    plugins: [
    ],
}