
import 'dotenv/config.js'
import mongoose from 'mongoose'

let url_bdd = process.env.URL_BDD

mongoose.connect(url_bdd).then(() => console.log("Database Connected")).catch(err => console.log(err))


