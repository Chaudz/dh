import { Router } from "express";
import { UIController } from "../controllers";

const router = Router();

router.get("/", UIController.home);
router.get("/menu", UIController.menu);
router.get("/khong-gian-nha-hang", UIController.space);

export default router;
