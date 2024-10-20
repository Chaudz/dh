import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import indexRouter from "./routers/index.js";
import adminRouter from "./routers/admin.js";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views")); // specify the views directory
app.set("view engine", "ejs"); // register the template engine
app.use(express.static(path.join(__dirname, "public"))); // Serving static files in Express

app.use("/", indexRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => {
  console.log("server is running locahost:3000");
});
