/*
@desc Routes of employee account management features
Includes: 
- Create/ delete account
- Login, logout
- Change password
- Get account by email, username, id, workplace, role.
- Get all accounts
*/

const express = require("express");
const router = express.Router();
const {getAllAccounts, createAccount} = require("../app/controllers/accountController")

router.route("/").get(getAllAccounts);
router.route("/").post(createAccount);

module.exports = router;