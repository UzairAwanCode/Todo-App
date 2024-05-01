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
