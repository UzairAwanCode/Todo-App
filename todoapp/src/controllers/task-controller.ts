import { Response } from "express";
import { AuthRequest } from "../middleware";
import Task from "../models/task-model";
import { ITask } from "../types";

export const getAllTasks = async (request:AuthRequest, response:Response)=>{
    try {
        const userId = request.user
        const tasks = await Task.find({user: userId})
        response.send(tasks)
    } catch (error) {
        console.log("error in getAllTasks", error);
        response.send({error:"Error while fetching tasks"})
        throw error
    }
}

export const createTask = async(request:AuthRequest, response:Response)=>{
    try {
        const userId = request.user
        const {name, date, categoryId}: ITask = request.body

        const task = await Task.create({
            name,
            date,
            categoryId,
            user: userId
        })

        response.send(task)
    } catch (error) {
        console.log("error in createTasks", error);
        response.send({error:"Error while fetching tasks"})
        throw error
    }
}

export const toggleTaskStatus = async (request:AuthRequest, response:Response)=>{
    try {
        const {isCompleted} = request.body
        const {id} = request.params

        const task = await Task.updateOne(
            {_id: id}, {isCompleted}
        )

        response.send({message: "Task status update"})
    } catch (error) {
        console.log("error in toggleTaskStatus", error);
        response.send({error:"Error while fetching tasks"})
        throw error
    }
}