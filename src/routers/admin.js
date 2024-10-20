import { Router } from "express";
import  AdminController  from "../controllers/admin_controller.js";

const router = Router();

router.get("/", AdminController.index);

export default router;
