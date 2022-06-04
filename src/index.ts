import * as dotenv from 'dotenv';
import express from "express";
import { defaultRouter } from "./routes";
import { requestLogger } from "./util/middleware";
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || 'http://localhost'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(requestLogger)

app.use('/', defaultRouter())

app.listen(PORT, () => console.log(`Server started on ${HOST}:${PORT}`))