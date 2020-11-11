# server-build
1. create a 'serve.js'
2. 'npm init -y' to generate 'package.json'
3. 'npm install'

# build basic server
1. require express
2. create instance of express
3. Set the PORT (be sure to include process.env.PORT for deploying to heroku)
4. Listen on the PORT
5. Add middleware that will allow us to parse the incoming body on the request that has a body.

# build routes
- build a test route: `"/api/config"`

### View routes
- Always going to be get routes
- Typically send back HTML for he browser to parse and display.
- use 'res.sendFile' to send back a previously built HTML file.

### To send back an HTML file
-build a get route
- call `res.sendFile`
- use `path.join()` to combine the _dirname with the file name. (`npm install path`)

### API routes
- Resource driven API development
- GET "/api/resources" returns a collections of resources
- GET "/api/resources/:id" should return a single resource
- POST "/api/resources" allows the user to create a new resource.