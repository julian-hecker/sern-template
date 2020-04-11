# SERN Template
Template for creating applications using SQL, Express, React, and NodeJS.

## Contents

### `/src`
Contains source code for React app. Gets compiled into `/build`.

### `/public`
Contains files that will be shared with a client. Resources such as css, javascript, images, rendered by client

### `/bin/www`
Server's entry point: runs the server on the specified port

### `/routes`
Takes an input URL and determines what to do by sending a message to controllers

### `/controllers`
takes a command and executes it, often using models to do so

### `/models`
structures the entities that will go into / come out from database

### `/utils`
Contains functions used in various locations

### `/middlewares`
Contains middlewares used in server requests





### `/config`
Contains secret data such as database URLs, API keys, etc.

### server.json
Configures app and imports other files



It might be better to separate frontend and backend, while keeping packages in root.




## Resources
- [Discussion](https://stackoverflow.com/questions/51126472/how-to-organise-file-structure-of-backend-and-frontend-in-mern)
- [Article](https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)
- [Example](https://github.com/osenvosem/typescript-full-stack-boilerplate#the-project-structure)
- [MERN Stack Project](https://github.com/didinj/mern-stack-crud)
- [Good Example](https://github.com/didinj/mern-stack-crud)
- [Express App Generator](https://expressjs.com/en/starter/generator.html)
- [MERN App Generator](https://www.npmjs.com/package/mern-app-generator)
- [SERN Project Example](https://github.com/sequelize/express-example)
