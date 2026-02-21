import express from 'express'
import db from '../dbConnections.js'

const router = express.Router()

router.get ('/severe', async (req, res) => {
    let [response] = await db.query ('SELECT content FROM questions WHERE categoryId = 1')
    res.send(response)
})

router.get ('/hurricane', async (req, res) => {
    let [response] = await db.query ('SELECT content FROM questions WHERE categoryId = 2')
    res.send(response)
})

router.get ('/winter', async (req, res) => {
    let [response] = await db.query ('SELECT content FROM questions WHERE categoryId = 3')
    res.send(response)
})

export default router