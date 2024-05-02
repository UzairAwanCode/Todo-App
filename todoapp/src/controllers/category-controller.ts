import { Request, Response } from "express";
import Category from "../models/category-model";
import { ICategory } from "../types";
import {AuthRequest} from '../middleware'

export const getAllCategories = async(request:AuthRequest, response:Response)=>{
    try{
        const {user} = request
        const categories = await Category.find({user: user})
        return response.send(categories)
    }
    catch(error){
        console.log("Error in getAllCategories", error);
        throw error
    }
}

export const createCategory = async (request:AuthRequest, response:Response)=>{
    try {
        const {color, icon, isEditable, name}: ICategory = request.body;
        const {user} = request // give us an id
        const category = await Category.create({
            color,
            icon,
            isEditable,
            name,
            user
        })

        return response.send(category)
    } catch (error) {
        console.log("Error in createCategory", error);
        throw error
        response.send({error: "Something went wrong"})
    }
}