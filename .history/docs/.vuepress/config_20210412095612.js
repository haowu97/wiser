module.exports = {
    title: '量化投资策略与技术',
    description: 'Just playing around',
    plugins: {
      '@maginapp/katex': {
        delimiters: 'dollars'
      }
  },
  themeConfig: {
    sidebar:  {
      '/': [{
      title: '多因子模型',
      collapsable: false, 
      children: [
        { title: 'items01', path:'/dev_manage/'},
        { title: 'items02', path:'/dev_manage/aaa'}
      ]
    }],
      '/literature/': [{
      title: 'items02',
      collapsable: false,
      children: [
        { title: 'items01', path:'/literature/aaa'},
        { title: 'items02', path:'/literature/bbbb'}
      ]
    }],
      '/guide/': [{
      title: 'items03-1',
      collapsable: false,
      children: [
        { title: 'items01', path:'/guide/'},
        { title: 'items01', path: '/guide/bbbb' }
      ]
      },
      {
        title: 'items03-2',
        collapsable: false,
        children: [
          { title: 'items01', path:'/guide/aaaa/'},
          { title: 'items01', path:'/guide/bbb/'}
        ],
    }],
      '/language/': [{
      title: 'items04', 
      collapsable: false,
      children: [
        { title: 'Chinese', path:'/language/chinese/'},
        { title: 'English', path:'/language/english/'}
      ]
    }]
    }
  }
}