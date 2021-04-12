module.exports = {
    title: '量化投资策略与技术',
    description: 'Just playing around',
    plugins: {
      '@maginapp/katex': {
        delimiters: 'dollars'
      },
      // "vuepress-plugin-auto-sidebar": {}
  },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        // { text: 'Guide', link: '/guide/', target:'_blank' },
        { text: 'GitHub', link: 'https://github.com/henrywu97/wiser' },
      ],
      displayAllHeaders: true, // 默认值: false
      sidebar: [
        {
          title: '第一章 量化选股',   // 必要的
          // path: '/QuantStrategy&Technology/Chapter1/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          prefix: '/QuantStrategy&Technology/Chapter1/',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            ''
          ]
        },
        {
          title: '第二章 量化',   // 必要的
          // path: '/quantstrategy&technology/chapter2/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          prefix: '/QuantStrategy&Technology/Chapter2/',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            { title: '股票基金', path:'/QuantStrategy&Technology/Chapter2/'},
            { title: '股票基金', path:'/QuantStrategy&Technology/Chapter2/2.9'}
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