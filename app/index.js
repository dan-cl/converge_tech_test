const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('converge tech test')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('unable to start server', err)
  }

  console.log(`server is listening on ${port}`)
})
