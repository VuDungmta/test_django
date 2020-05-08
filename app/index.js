const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'
app.listen(port, host, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.error(err)
  }
  // eslint-disable-next-line no-console
  console.log(`Listening: http://${host}:${port}`)
  return true
})

module.exports = app
console.log("run 8080")