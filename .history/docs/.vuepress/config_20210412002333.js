module.exports = {
    title: '量化投资策略与技术',
    description: 'Just playing around',
    markdown: {
      config: md => {
        md.set({html: true})
        md.use(require("markdown-it-katex"))
      }
    }
}