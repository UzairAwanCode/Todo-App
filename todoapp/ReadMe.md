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
