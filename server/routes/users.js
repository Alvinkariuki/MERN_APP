import express from "express";
import * as usersFunctions from "../controllers/user.js";

const router = express.Router();

router.post("/signin", usersFunctions.signin);
router.post("/signup", usersFunctions.signup);

export default router;
