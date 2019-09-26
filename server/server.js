require('dotenv').config()

const express = require('express')
const app = express()
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env




massive(CONNECTION_STRING).then()
