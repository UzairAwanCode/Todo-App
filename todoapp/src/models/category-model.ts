import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    isEditable: {
        type: Boolean,
        required: false,
        default: true
    },
    color:{
        id: String,
        name: String,
        code: String
    },
    icon:{
        id: String,
        name: String,
        symbol: String
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

const category = mongoose.model("Category", categorySchema)
export default category