# Create Project and setup Express
follow these steps to setup express after creating folder and going into the folder

1. npm init
2. npm add express (install all the dependencies)
3. npm add -D @types/express @types/node typescript ts-node(install all dev dependencies ts, tsnode etc)
4. touch tsconfig.json(becuse all ts code convert in js it creates tsconfig.js file)
5. write this is package.json script section: "dev": "ts-node ./src/server.ts && node ./dist/server.js"
6. create src>server.ts and write code which setup our express
7. npm run dev and for testing we use thunder client extension and write http://localhost:1337/ping and make sure we are setting in get mode

# Steps to Setup mongodb in Project
1. npm add mongoose
2. create db.ts in src and write code for connection
3. import this in server.js after PORT variable

# handle user Authentaaction on the server side
1. Make folder user-modal.ts and write schema
2. install npm add jsonwebtoken bcrypt for password security
3. Create controller in user.controller.ts means write api which send's data to database
4. Create route in routes/user.routes.ts file
5. Go server.ts and register our route above application.port
6. we can write application.use(express.json()) so that it can pass the body and go to db.ts and add collection name blossom-app after ?
7. Set user login functionality first we have to send jsonwebtoken to the frontend so that we can validtated before fullfilling the result in user.controller.ts and also create types/index.d.ts to set interface
8. create route in user.routes.ts

# Create apis for categories for crud operation
1. create file in models>category-model.ts and write schema
2. create file controllers>category-controller.ts for getting all category info from database code. "Schema.Types.ObjectId refers to a specific data type used for defining properties in Mongoose schemas."
3. create new file routes>category.routes.ts and give path to that api we just created in point 2
4. write code to enter new category in database in category-controller.ts
5. create middleware>index.ts to write a middleware to get userid which we use to pointout whose category is this
6. create routes in routes>category.routes.ts for creating category and in server.ts we will register like before
7. write delete code in controllers>category-controller.ts now
8. write update code in controllers>category-controller.ts now

# Create api for task crud operation
1. create models>category-model.ts and schema
2. create file controllers>task-controller.ts for getting all category info from database code.
3. create new file routes>task.routes.ts and give path to that api we just created in point 2 and also create route in server.ts too
4. create add task in task-controller.ts but before that first define type in index.d.ts and then add route like previous steps
5. write toogle task conversion from true to false and vice versa in task-controller.ts
6. Now write code for getAllTask by category id and create routes same as before
7. Now write getAllCompletedTask code in same file
8. Now write getTaskForToday code in same file
8. Now write editTask code in same file