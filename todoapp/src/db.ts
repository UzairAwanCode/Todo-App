import mongoose from "mongoose"

const connectToDataBase = async ()=>{
    try{
        const connection = await mongoose.connect("mongodb+srv://uzairawan673:ZDX7lvwTZF699Vwf@blossom-app.1jfsznu.mongodb.net/")
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