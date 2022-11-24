const express = require('express');
const router = express.Router();

const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController');
const {protect} = require('../middleware/authMiddleware');
// Shortcut
// router.route('/').get(getGoals).post(setGoal);
// router.route('/:id').put(updateGoal).delete(deleteGoal);

router.get('/', protect, getGoals);

router.post('/', protect, setGoal);

router.put('/:id', protect, updateGoal);

router.delete('/:id', protect, deleteGoal);

module.exports = router

