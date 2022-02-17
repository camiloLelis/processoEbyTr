const { Router } = require('express');

const Task = require('../models/taskModel');

const router = Router();

router.get('/', async (req, res) => {
  const task = await Task.getAll();

  return res.status(200).json(task);
});

module.exports = router;