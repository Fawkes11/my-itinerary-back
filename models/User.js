import { Schema, model, Types } from "mongoose";

let collection = 'categories';

let schema = new Schema({
    name: { type: String, required: true },
    color: {}
})