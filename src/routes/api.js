import express from "express";

import { turnOnIR,turnOffIR,getIRstate } from "../controllers/greetController.js";

const router = express.Router();

router.get('/on', turnOnIR);
router.get('/off', turnOffIR);
router.get('/check', getIRstate);



export default router;
