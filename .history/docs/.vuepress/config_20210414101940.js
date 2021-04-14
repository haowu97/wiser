module.exports = {
    title: 'WISER Club',
    description: null,
    plugins: {
      '@maginapp/katex': {
        delimiters: 'dollars'
      },
      '@vuepress/active-header-links':{},
      'vuepress-plugin-nprogress':{},
      // "vuepress-plugin-auto-sidebar": {}
  },
    themeConfig: {
      logo: '/logo_grey.jpg',
      smoothScroll: true,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        // { text: 'Guide', link: '/guide/', target:'_blank' },
        { text: 'GitHub', link: 'https://github.com/henrywu97/wiser' },
      ],
      displayAllHeaders: true, // 默认值: false
      sidebar: [
        {
          title: '第一章 量化投资概念',   // 必要的
          path: '/QuantStrategy&Technology/Chapter1/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          // prefix: '/QuantStrategy&Technology/Chapter1/',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter1/'},
          ]
        },
        {
          title: '第二章 量化选股',   // 必要的
          path: '/QuantStrategy&Technology/Chapter2/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter2/'},
            { title: '股票型基金业绩归因评价', path:'/QuantStrategy&Technology/Chapter2/2.9Assessment', collapsable: false}
          ]
        },
        {
          title: '第三章 量化择时',   // 必要的
          path: '/QuantStrategy&Technology/Chapter3/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter3/'},
          ]
        },
        {
          title: '第四章 股指期货套利',   // 必要的
          path: '/QuantStrategy&Technology/Chapter4/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter4/'},
          ]
        },
        {
          title: '第五章 商品期货套利',   // 必要的
          path: '/QuantStrategy&Technology/Chapter5/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter5/'},
          ]
        },
        {
          title: '第六章 统计套利',   // 必要的
          path: '/QuantStrategy&Technology/Chapter6/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter6/'},
          ]
        },
        {
          title: '第七章 期权套利',   // 必要的
          path: '/QuantStrategy&Technology/Chapter7/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter7/'},
          ]
        },
        {
          title: '第八章 算法交易',   // 必要的
          path: '/QuantStrategy&Technology/Chapter8/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter8/'},
          ]
        },
        {
          title: '第九章 另类套利策略',   // 必要的
          path: '/QuantStrategy&Technology/Chapter9/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter9/'},
          ]
        },
        
      ]
      // sidebar: [
      //   '/',
      //   '/QuantStrategy&Technology/Chapter1/',
      //   '/QuantStrategy&Technology/Chapter2/2.9',
      //   '/QuantStrategy&Technology/Chapter2/',
      // ]
    }
}