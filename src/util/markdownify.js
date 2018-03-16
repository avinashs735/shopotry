import markdownIt from 'markdown-it'
const md = markdownIt({
  html: true,
  linkify: true
})

export default (markdown = '') => md.render(markdown)
