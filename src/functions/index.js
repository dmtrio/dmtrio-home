// const express = require('express')
const next = require('next')
const nextConfig = require('../next.config.js')
const prodConfig = { ...nextConfig, dev: false}

const dev = process.env.NODE_ENV !== 'production'
const app = next(prodConfig)
const handle = app.getRequestHandler()

module.exports.handler = (req, res) => {

  return app.prepare()
  .then(() => handle(req, res))
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

  // res.send(
  //   app.prepare()
  //   .then(() => {
  //     const server = express()
  
  //     server.get('/p/:id', () => {
  //       const actualPage = '/post'
  //       const queryParams = { title: req.params.id }
  //       app.render(req, res, actualPage, queryParams)
  //     })
  
  //     server.get('*', () => {
  //       return handle(req, res)
  //     })
  
  //     // server.listen(3000, err => {
  //     //   if (err) throw err
  //     //   console.log('> Ready on http://localhost:3000')
  //     // })
  //   })
  //   .catch(ex => {
  //     console.error(ex.stack)
  //     process.exit(1)
  //   })
  // ) 
}

