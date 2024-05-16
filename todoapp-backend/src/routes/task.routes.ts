import express, { Router } from 'express'
import { authenticationMiddleware } from '../middleware'
import { createTask, deleteTask, editTask, getAllCompletedTasks, getAllTasks, getAllTasksByCategory, getTaskForToday, toggleTaskStatus } from '../controllers/task-controller'

const taskRoutes = express.Router()

taskRoutes.use(authenticationMiddleware)

taskRoutes.route("/").get(getAllTasks)
taskRoutes.route("/tasks-by-categories/:id").get(getAllTasksByCategory)
taskRoutes.route("/completed").get(getAllCompletedTasks)
taskRoutes.route("/today").get(getTaskForToday)
taskRoutes.route("/create").post(createTask)
taskRoutes.route("/update/:id").put(toggleTaskStatus)
taskRoutes.route("/:id").delete(deleteTask)
taskRoutes.route("/edit/:id").put(editTask)

export default taskRoutes