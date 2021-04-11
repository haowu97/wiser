module.exports = {
    title: '量化投资策略与技术',
    description: 'Just playing around',
    markdown: {
      extendMarkdown: md => {
          md.set({
              html: true
          })
          md.use(require('markdown-it-katex'))
      }
  },
  head: [
      ['link', {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
      }],
      ['link', {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
      }]
  ]
}