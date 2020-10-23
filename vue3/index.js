const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')
const server = require('express')()

server.get('*', async (req, res) => {
  const app = createSSRApp({
    data: () => ({ msg: 'Vue3' }),
    template: `<h1>{{ msg }}</h1>`
  })

  try {
    const html = await renderToString(app)

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Vue3</title></head>
        <body>${html}</body>
      </html>
    `)
  } catch (err) {
    res.status(500).end('Internal Server Error')
  }
})

server.listen(8080)