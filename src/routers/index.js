import { Router } from "express";
import  UIController  from '../controllers/ui.js';

const router = Router();

router.get("/", UIController.home);
router.get("/menu", UIController.menu);
router.get("/khong-gian-nha-hang", UIController.space);
router.get("/dat-ban", UIController.bookTable);

export default router;