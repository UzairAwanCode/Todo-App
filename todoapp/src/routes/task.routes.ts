import express, { Router } from 'express'
import { authenticationMiddleware } from '../middleware'
import { createTask, getAllTasks, toggleTaskStatus } from '../controllers/task-controller'

const taskRoutes = express.Router()

taskRoutes.use(authenticationMiddleware)

taskRoutes.route("/").get(getAllTasks)
taskRoutes.route("/create").post(createTask)
taskRoutes.route("/update/:id").put(toggleTaskStatus)

export default taskRoutes