var connect = require('connect')
var serveIndex = require('serve-index')
var serveStatic = require('serve-static')

var app = connect()
var dir = process.argv[3] || '.' 
app.use(serveIndex(dir, {'icons':true}))
app.use(serveStatic(dir))

var server  = app.listen(process.argv[2])
