import express from 'express'
import cors from 'cors'
import db from './dbConnections.js'
//import studentsRouter from './Routers/studentsRouter.js'
//import coursesRouter from './Routers/coursesRouter.js'
import userRouter from './Routers/userRouter.js'
import qaRouter from './Routers/qaRouter.js'

const server = express();
server.use(express.json())
server.use (cors())

//server.use ('/students', studentsRouter)
//server.use ('/courses', coursesRouter)
server.use ('/user', userRouter)
server.use ('/main', qaRouter)

// "This code tells the server what to do when someone visits the home page."
server.get ("/", (req,res) => {
  res.send ("The server is running ")
})

server.listen(4000, () => {
    console.log("The server is running at port 4000")
})