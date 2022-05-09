const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const tarea = require('./taskSchema')
const app = express();


router.get("/posts", async (req, res) => {

    const tasks = await tarea.find();
    res.send(tasks);
})


module.exports = router


