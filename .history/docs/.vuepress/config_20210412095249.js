module.exports = {
    title: '量化投资策略与技术',
    description: 'Just playing around',
    plugins: {
      '@maginapp/katex': {
        delimiters: 'dollars'
      }
  },
  themeConfig: {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}