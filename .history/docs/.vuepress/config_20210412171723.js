module.exports = {
    title: '量化投资策略与技术',
    description: 'Just playing around',
    plugins: {
      '@maginapp/katex': {
        delimiters: 'dollars'
      },
      "vuepress-plugin-auto-sidebar": {}
  },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        // { text: 'Guide', link: '/guide/', target:'_blank' },
        { text: 'GitHub', link: 'https://github.com/henrywu97/wiser' },
      ],
      displayAllHeaders: true, // 默认值: false
      sidebar: 'auto'
    }
}