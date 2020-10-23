const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
      msg: 'Vue2'
    },
    template: `<h1>{{ msg }}</h1>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Vue2</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8080)