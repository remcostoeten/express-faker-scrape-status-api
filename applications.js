const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController");

router.get("/disconnected", applicationController.getDisconnected);
router.get("/connected", applicationController.getConnected);
router.get("/idle", applicationController.getIdle);
router.get("/operational", applicationController.getOperational);
router.get("/all", applicationController.getAllApplications);

module.exports = router;
