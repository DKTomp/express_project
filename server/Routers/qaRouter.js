import express from 'express'
import db from '../dbConnections.js'

const router = express.Router()

router.get ('/categories', async (req, res) => {
    let [response] = await db.query ("SELECT * FROM categories")
    res.send(response)
})

router.get ('/categories/:id', async (req, res) => {
    let {id} = req.params
    let [response] = await db.query ("SELECT * FROM categories JOIN questions ON questions.categoryID = categories.categoryID LEFT JOIN answers ON questions.questionID = answers.questionID WHERE categories.categoryID = ?", id)
    res.send(response)
})

export default router
