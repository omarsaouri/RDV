const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const supabase = require("./src/models/supabase");
const authRouter = require("./src/routes/auth/authRouter");
const adminUnitRouter = require("./src/routes/admin/adminUnitRouter");
const agendaRouter = require("./src/routes/admin/agendaRouter");
const specialiteRouter = require("./src/routes/admin/specialiteRouter");
const uniteRouter = require("./src/routes/admin/uniteRouter");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/auth", authRouter);
// admin routes
app.use("/adminUnite", adminUnitRouter);
app.use("/agenda", agendaRouter);
app.use("/specialite", specialiteRouter);
app.use("/unite", uniteRouter);

app.listen(port, () => console.log(`App listening at ${port}`));
