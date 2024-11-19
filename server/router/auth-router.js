const express = require ('express');
const router = express.Router ();
const authcontrollers = require ("../controllers/auth-controller")
const signupSchema = require ("../validators/auth-validator")
const validate = require ("../middlewares/validate-mw");
const { required } = require('../validators/login-validator');
const loginSchema = require('../validators/login-validator');
const authMiddleware = require ("../middlewares/auth-mw")

router.route("/").get(authcontrollers.home);
router
.route("/register")
.post( validate(signupSchema),authcontrollers.register);
router
.route("/login")
.post(validate(loginSchema),authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;