const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const supabase = require("./src/models/supabase");
const authRouter = require("./src/routes/auth/authRouter");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/auth", authRouter);

app.listen(port, () => console.log(`App listening at ${port}`));
