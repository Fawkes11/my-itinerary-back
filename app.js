import express from 'express'
import 'dotenv/config.js'
import './index.js'


const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 8080
const ready = () => console.log("SERVER READY")

server.listen(PORT, ready)