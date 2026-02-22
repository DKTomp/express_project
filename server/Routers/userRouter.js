import express from 'express'
import db from '../dbConnections.js'

const router = express.Router()

router.post ("/login", async (req, res)=> {
    //console.log ('method: ', req.method)
    const {userName, password} = req.body
    //console.log (userName, password)
    let [response] = await db.query (`SELECT * FROM users WHERE userName=? AND password=?`, [userName, password])
    console.log (response)
    res.send (response)
})

router.post ("/register", async (req, res)=> {
    //console.log ('method: ', req.method)
    const {userName, password, email} = req.body
    //console.log (userName, password, email)
    let [response] = await db.query (`INSERT INTO users (username, password, email) VALUES (?, ?, ?)`, [userName, password, email])
    console.log (response)
    res.send (response)
})

router.post ("/validateusername", async (req, res)=> {
    const userName = req.body.userName
    let [response] = await db.query (`SELECT * FROM users WHERE username = ?`, [userName])
    res.send (response)
})



export default router;