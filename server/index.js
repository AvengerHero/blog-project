const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const config = require('../nuxt.config.js')
const articleController = require('./controllers/article')

// Import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)

    const { host, port } = nuxt.options.server

    await nuxt.ready()
        // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }
    // JSON Parser
    app.use(express.urlencoded())
    app.use(express.json())

    // Moji Controller routing
    app.get('/api/article/index', articleController.index)
    app.get('/api/article/show/:id', articleController.show)
    app.post('/api/article/create', articleController.store)
    app.put('/api/article/update/:id', articleController.update)
    app.delete('/api/article/delete/:id', articleController.destroy)
        // app.post('/api/moji', mojiController.store)
        // app.put('/api/moji/:id', mojiController.update)
        // app.delete('/api/moji/:id', mojiController.destroy)

    // Give nuxt middleware to express
    app.use(nuxt.render)

    // Listen the server
    app.listen(port, host)
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}
start()