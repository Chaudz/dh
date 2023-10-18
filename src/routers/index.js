import { Router } from "express";
import { UIController } from "../controllers";

const router = Router();

router.get("/", UIController.home);

export default router;
