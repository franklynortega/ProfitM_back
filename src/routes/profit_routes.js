import { Router } from "express";
import { requireToken } from "../middlewares/require_token.js";
//import {getInvoices, setInvoices, getLote} from "../controllers/profit_controller.js";

const router = Router();

// router.post("/getinvoices/:fec_fin", requireToken, getInvoices);

export default router;
