const express = require('express')
const app = express()
const port = 8080

app.use(express.static('build'))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
