require("dotenv").config();

const express = require ("express");
const app = express();
const userRouter = require("./api/users/user.router");
const pagtoRouter = require("./api/pagto/pagto.router");
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/pagto", pagtoRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Servidor está rodando:", process.env.APP_PORT);
});