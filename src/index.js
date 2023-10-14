import express from "express";
import indexRouter from "./routers";
import adminRouter from "./routers/admin";

const app = express();

app.use("/", indexRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => {
  console.log("server is running locahost:3000");
});
