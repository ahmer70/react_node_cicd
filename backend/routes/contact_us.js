const express = require('express')
const router = express.Router()
const { Contact_Us } = require('../Sequelize/sequelize')


router.put("/register", async (req, res) => {

    try {
        const { name, email, subject, message } = req.body

        let data = {
            name: name,
            email: email,
            subject: subject,
            message: message

        }
        await Contact_Us.create(data)
        res.json({ contact: data })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }

})

router.get("/getAll", async (req, res) => {

    try {
        let find = await Contact_Us.findAll()
        res.json({ contact: find })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }

})

router.post("/update", async (req, res) => {
    const { id,  name, email, subject, message } = req.body

    try {
        let find = await Contact_Us.findOne({
            where: {
                id: id
            }
        })
        if (find) {
            await Contact_Us.update({
                name: name,
                email: email,
                subject: subject,
                message: message


            }, {
                where: {
                    id: id
                }
            })
        }
        res.json({ contact: find })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }

})

router.delete("/delete/:id", async (req, res) => {

    try {
        let find = await Contact_Us.findOne({
            where: {
                id: req.params.id
            }
        })
        if (find) {
            await Contact_Us.destroy({
                where: {
                    id: req.params.id
                }
            })
        }
        res.json({ contact: find })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }

})
module.exports = router