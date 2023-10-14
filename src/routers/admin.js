import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("admin, welcom to admin page");
});

export default router;
