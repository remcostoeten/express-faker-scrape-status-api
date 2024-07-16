const express = require('express');
const Application = require('./application');

const app = express();
const port = process.env.PORT || 3000;

app.get('/applications', (req, res) => {
  const applications = Application.getAllApplications();
  res.json(applications);
});

app.get('/applications/:state', (req, res) => {
  const state = req.params.state;
  const applications = Application.getByState(state);
  res.json(applications);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});