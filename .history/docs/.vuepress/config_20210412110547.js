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
    sidebar: 'auto'
  }
}