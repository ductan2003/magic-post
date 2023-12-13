const express = require("express");
const router = express.Router();
const { createHub, createWarehouse, getAllWarehouse, getAllHub, getAllWarehouseName, getBranchNameById } = require('../app/controllers/branchController');
const { staffAuth, roleCheck, accessAccountCheck } = require("../app/middleware/auth");
const { receiveConfirmList, sendConfirmList } = require("../app/controllers/branchController");
//TEST
router.post("/create/hub", staffAuth, roleCheck(["supervisor"]), createHub);
router.post("/create/warehouse", staffAuth, roleCheck(["supervisor"]), createWarehouse);
router.get("/all/warehouse", staffAuth, roleCheck(["supervisor"]), getAllWarehouse);
// router.get("/all/hub", staffAuth, roleCheck(["supervisor"]), getAllHub);
router.get("/all/hub", staffAuth, getAllHub);
router.get("/all/warehouse/name", staffAuth, getAllWarehouseName);
router.get("/:branchId", getBranchNameById);

router.get("/coming/receive", staffAuth, receiveConfirmList);
router.get("/coming/send", staffAuth, sendConfirmList);

module.exports = router; 