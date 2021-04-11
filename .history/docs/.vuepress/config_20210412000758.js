module.exports = {
    title: '量化投资策略与技术',
    description: 'Just playing around'，
    extendMarkdown: md => {
      md.set({
          html: true
      })
      md.use(require('markdown-it-katex'))
  }
}
  
}