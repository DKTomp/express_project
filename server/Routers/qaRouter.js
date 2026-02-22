import express from 'express'
import db from '../dbConnections.js'

const router = express.Router()

router.get ('/severe', async (req, res) => {
    let [response] = await db.query ("SELECT * FROM questions INNER JOIN answers ON questions.questionID = answers.questionID WHERE questions.categoryID = 1")
    res.send(response)
})

router.get ('/hurricane', async (req, res) => {
    let [response] = await db.query ("SELECT * FROM questions INNER JOIN answers ON questions.questionID = answers.questionID WHERE questions.categoryID = 2")
    res.send(response)
})

router.get ('/winter', async (req, res) => {
    let [response] = await db.query ("SELECT * FROM questions INNER JOIN answers ON questions.questionID = answers.questionID WHERE questions.categoryID = 3")
    res.send(response)
})

export default router