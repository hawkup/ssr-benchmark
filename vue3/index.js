const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')
const server = require('express')()

server.get('*', async (req, res) => {
  const app = createSSRApp({
    data: () => ({ msg: 'hello' }),
    template: `<div>{{ msg }}</div>`
  })

  try {
    const html = await renderToString(app)

    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  } catch (err) {
    res.status(500).end('Internal Server Error')
  }
})

server.listen(8080)