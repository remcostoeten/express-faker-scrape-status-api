const Application = require('../models/application');

const createStateEndpoint = (state) => {
  return (req, res) => {
    const stateApps = Application.getByState(state);
    res.json(stateApps);
  };
};

module.exports = {
  getDisconnected: createStateEndpoint('Disconnected'),
  getConnected: createStateEndpoint('Connected'),
  getIdle: createStateEndpoint('Idle'),
  getOperational: createStateEndpoint('Operational'),
  getAllApplications: (req, res) => {
    const apps = Application.getAllApplications();
    res.json({
      applications: apps,
      legend: {
        Operational: '🟢',
        Idle: '🟡',
        Connected: '🔵',
        Disconnected: '🔴'
      },
      lastUpdate: new Date().toISOString()
    });
  }
};