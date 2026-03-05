import express from 'express'
import db from '../dbConnections.js'

const router = express.Router()

router.get ('/severe', async (req, res) => {
    let [response] = await db.query ("SELECT categories.name, questions.description, answers.content FROM categories INNER JOIN questions ON categories.categoryID = questions.categoryID INNER JOIN answers ON questions.questionID = answers.questionID WHERE categories.categoryID = 1")
    res.send(response)
})

router.get ('/hurricane', async (req, res) => {
    let [response] = await db.query ("SELECT categories.name, questions.description, answers.content FROM categories INNER JOIN questions ON categories.categoryID = questions.categoryID INNER JOIN answers ON questions.questionID = answers.questionID WHERE categories.categoryID = 2")
    res.send(response)
})

router.get ('/winter', async (req, res) => {
    let [response] = await db.query ("SELECT categories.name, questions.description, answers.content FROM categories INNER JOIN questions ON categories.categoryID = questions.categoryID INNER JOIN answers ON questions.questionID = answers.questionID WHERE categories.categoryID = 3")
    res.send(response)
})

export default router
