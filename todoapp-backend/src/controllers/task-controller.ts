import { Response } from "express";
import { AuthRequest } from "../middleware";
import Task from "../models/task-model";
import { ITask } from "../types";

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

export const getAllTasksByCategory = async(request:AuthRequest, response:Response)=>{
    try {
        const userId = request.user
        const {id} = request.params
        const tasks = await Task.find({user: userId, categoryId: id})
        response.send(tasks)
    } catch (error) {
        console.log("error in getAllTasksByCategory", error);
        response.send({error:"Error while fetching all tasks by id"})
        throw error
    }
}

export const getAllCompletedTasks = async(request:AuthRequest, response:Response)=>{
    try {
        const userId = request.user
        const tasks = await Task.find({user: userId, isCompleted: true})
        response.send(tasks)
    } catch (error) {
        console.log("error in getAllCompletedTasks", error);
        response.send({error:"Error while fetching all completed tasks"})
        throw error
    }
}

export const getTaskForToday = async(request:AuthRequest, response:Response)=>{
    try {
        const userId = request.user
        const todaysISODate = new Date()
        todaysISODate.setHours(0,0,0,0)
        const tasks = await Task.find({user: userId, date: todaysISODate.toString()})
        console.log(userId);
        console.log(tasks);
        console.log(todaysISODate);
        
        
        response.send(tasks)
    } catch (error) {
        console.log("error in getAllCompletedTasks", error);
        response.send({error:"Error while fetching all completed tasks"})
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

export const deleteTask = async(request: AuthRequest, response:Response)=>{
    try {
        const {id} = request.params
        await Task.deleteOne({_id:id})
        response.send({message: "Task Deleted"})
    } catch (error) {
        console.log("error in deleteTask", error);
        response.send({error:"Error while fetching tasks"})
        throw error
    }
}

export const editTask = async(request:AuthRequest, response:Response)=>{
    try {
        const {_id, categoryId, date, name}: ITask = request.body
        await Task.updateOne(
            {_id}, {$set:{name, categoryId, date}}
        )
        response.send({message:"Task Updated Successfully"})
    } catch (error) {
        console.log("error in editTask", error);
        response.send({error:"Error while updating tasks"})
        throw error
    }
}