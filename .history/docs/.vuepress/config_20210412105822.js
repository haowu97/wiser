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
    sidebar:  {
      '/QuantStrategy&Technology/Chapter2/': [{
      title: '量化选股',
      collapsable: true, 
      children: [
        { title: 'items01', path:'/dev_manage/'},
        { title: 'items02', path:'/dev_manage/aaa'}
      ]
    }]
    }
  }
}