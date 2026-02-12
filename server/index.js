import express from 'express'
import cors from 'cors'
import db from './dbConnections.js'
import studentsRouter from './Routers/studentsRouter.js'
import coursesRouter from './Routers/coursesRouter.js'

const server = express()
server.use(cors('localhost://3000'))

server.use ('/students', studentsRouter)
server.use ('/courses', coursesRouter)

// "This code tells the server what to do when someone visits the home page."
server.get ("/", (req,res) => {
  res.send ("The server is running ")
})

server.listen(4000, () => {
    console.log("The server is running at port 4000")
})