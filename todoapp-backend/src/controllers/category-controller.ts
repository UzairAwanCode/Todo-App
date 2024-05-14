import { Response } from "express";
import { AuthRequest } from '../middleware';
import Category from "../models/category-model";
import { ICategory } from "../types";

export const getAllCategories = async (request: AuthRequest, response: Response) => {
    try {
        const { user } = request
        const categories = await Category.find({ user: user })

        return response.send(categories)
    }
    catch (error) {
        console.log("Error in getAllCategories", error);
        throw error
    }
}

export const getCategoryById = async (request: AuthRequest, response: Response) => {
    try {
        const { user } = request
        const { id } = request.params
        const category = await Category.findOne({ _id: id })
        return response.send(category)
    } catch (error) {
        response.send({ error: "Something went wrong" })
        console.log("error in getCategoryById", error)
        throw error
    }
}

export const createCategory = async (request: AuthRequest, response: Response) => {
    try {
        const { color, icon, isEditable, name }: ICategory = request.body;
        const { user } = request // give us an id
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
        response.send({ error: "Something went wrong" })
        throw error
    }
}

export const deleteCategory = async (request: AuthRequest, response: Response) => {
    try {
        const { id } = request.params
        await Category.deleteMany({ _id: id })
        response.send({ message: "Category Deleted" })
    } catch (error) {
        console.log("error in deleteCategory", error);
        response.send({ error: "Something went wrong" })
        throw error
    }
}

export const updateCategory = async (request: AuthRequest, response: Response) => {
    try {
        const { _id, color, icon, isEditable, name }: ICategory = request.body
        await Category.updateOne({ _id }, { $set: { name, color, icon, isEditable } })
        response.send({ message: "Category Updated" })
    } catch (error) {
        console.log("error in updateCategory", error);
        response.send({ error: "Something went wrong" })
        throw error
    }
}

