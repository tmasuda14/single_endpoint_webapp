# Tai Masuda's Liatrio Apprenticeship Exercise

## Step 0, Instillations:

1. Install Node (using homebrew on mac): `$brew install node`
  * [Official installer](https://nodejs.org/en/#download)
  * [Linux installation methods](https://nodejs.org/en/download/package-manager/)
2. Start a new Node.js project with: `npm init`
  * Completing the prompts will create your package.json file
3. Use npm to install the Express package: `npm install express`

## Step 1, Node.js Application:

1. Create index.js and test the server using [this source.](https://expressjs.com/en/starter/hello-world.html)
  * Begin server with: `node index.js` in the root directory of the project
  * Your browser opened to http://localhost:3000/ (use the port number inside index.js)
2. Edit index.js to respond with a JSON object
  * Use `req.json()`
3. Create a dynamic date variable for the timestamp field

## Step 2, Docker Containerization:

1. [Docker Source](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
2. Build image `docker build . -t <your username>/node-web-app`
