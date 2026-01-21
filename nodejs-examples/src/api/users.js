/**
 * Topic 6: Frameworks (Express)
 * Implements a simple RESTful resource for Users.
 */
const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// GET /users
router.get('/', (req, res) => {
    res.json(users);
});

// GET /users/:id
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

// POST /users
router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const newUser = {
        id: users.length + 1,
        name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = router;
