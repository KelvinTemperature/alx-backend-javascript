const express = require('express');

const router = express.Router();

const StudentsController = require('../controllers/StudentsController');
const AppController = require('../controllers/AppController');

router.get('/', async (req, res) => AppController.getHomepage(req, res));

router.get('/students', async (req, res) => StudentsController.getAllStudents(req, res));

router.get('/students/:major',
  async (req, res) => StudentsController.getAllStudentsByMajor(req, res));

module.exports = router;
