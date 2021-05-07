module.exports = {
    title: 'WISER Club',
    head: [
      ['link', { rel: 'icon', href: '/logo_white.png' }]
    ],
    description: null,
    plugins: {
      '@maginapp/katex': {
        delimiters: 'dollars'
      },
      '@vuepress/active-header-links':{},
      '@vuepress/nprogress':{},
      '@vuepress/back-to-top':{},
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
          sidebarDepth: 0,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter1/'},
          ]
        },
        {
          title: '第二章 量化选股',   // 必要的
          path: '/QuantStrategy&Technology/Chapter2/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter2/'},
            { title: '2.7 风格轮动', path:'/QuantStrategy&Technology/Chapter2/2.7Style_rotation'},
            { title: '2.8 行业轮动', path:'/QuantStrategy&Technology/Chapter2/2.8Industry_rotation'},
            { title: '2.9 股票型基金业绩归因评价', path:'/QuantStrategy&Technology/Chapter2/2.9Assessment'}
          ]
        },
        {
          title: '第三章 量化择时',   // 必要的
          path: '/QuantStrategy&Technology/Chapter3/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter3/'},
            { title: '3.1 趋势追踪', path:'/QuantStrategy&Technology/Chapter3/3.1趋势追踪'},
            { title: '3.2 市场情绪', path:'/QuantStrategy&Technology/Chapter3/3.2市场情绪'},
            { title: '3.4 牛熊线', path:'/QuantStrategy&Technology/Chapter3/3.4牛熊线'},
            { title: '3.5 Hurst指数', path:'/QuantStrategy&Technology/Chapter3/3.5Hurst指数'},
          ]
        },
        {
          title: '第四章 股指期货套利',   // 必要的
          path: '/QuantStrategy&Technology/Chapter4/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter4/'},
            { title: '4.1 基本概念', path:'/QuantStrategy&Technology/Chapter4/4.1'},
			      { title: '4.2 期限套利', path:'/QuantStrategy&Technology/Chapter4/4.2'},
          ]
        },
        {
          title: '第五章 商品期货套利',   // 必要的
          path: '/QuantStrategy&Technology/Chapter5/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter5/'},      
          ]
        },
        {
          title: '第六章 统计套利',   // 必要的
          path: '/QuantStrategy&Technology/Chapter6/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter6/'},
          ]
        },
        {
          title: '第七章 期权套利',   // 必要的
          path: '/QuantStrategy&Technology/Chapter7/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter7/'},
            { title: '期权套利策略', path:'/QuantStrategy&Technology/Chapter7/Option Strategies'}
          ]
        },
        {
          title: '第八章 算法交易',   // 必要的
          path: '/QuantStrategy&Technology/Chapter8/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter8/'},
          ]
        },
        {
          title: '第九章 另类套利策略',   // 必要的
          path: '/QuantStrategy&Technology/Chapter9/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,    // 可选的, 默认值是 1
          children: [
            { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter9/'},
          ]
        },
        
      ]
    }
}