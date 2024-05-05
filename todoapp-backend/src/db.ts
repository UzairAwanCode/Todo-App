import mongoose from "mongoose"

const connectToDataBase = async ()=>{
    try{
        // const connection = await mongoose.connect("mongodb+srv://uzairawan673:ZDX7lvwTZF699Vwf@blossom-app.1jfsznu.mongodb.net/")
        const connection = await mongoose.connect("mongodb+srv://uzairawan673:ZDX7lvwTZF699Vwf@blossom-app.1jfsznu.mongodb.net/user-details?retryWrites=true&w=majority&appName=blossom-app")
        if(connection){
            console.log("Connection Establish");
        }
    }
    catch(error){
        console.log("error in connectToDatabase", error);
        throw error
    }
}

export default connectToDataBase