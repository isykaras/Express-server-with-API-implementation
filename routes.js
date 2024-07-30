const express = require('express');
const createMyCustomApi = express.Router();

// Define routes
createMyCustomApi.get('/users', (req, res) => {
  res.send('List of users');
});


createMyCustomApi.post('/users', (req, res) => {
  res.send('Create a new user');
});

createMyCustomApi.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Update user ${userId}`);
});

createMyCustomApi.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Delete user ${userId}`);
});

module.exports = createMyCustomApi;