import express from 'express'
import db from '../dbConnections.js'

const router = express.Router()

router.get ("/", async (req, res) => {
    let [result] = await db.query ("select * from students")
    console.log(result)
    res.send ("Student request recieved")
    
})

router.get ("/:id", (req, res) => {
    res.send ("student Request recieved 2")
})

export default router 