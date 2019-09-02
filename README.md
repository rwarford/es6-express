# Node Express with ES6 features enabled

## Step 1. Create the directory structure.
```bash
mkdir -p es6-express/src
```
## Step 2. Initialize node.js.
```bash
cd es6-express
npm init -y
```
## Step 3. Install express.
```bash
npm install express
```
## Step 4. Install babel.
```bash
npm install --save-dev @babel/cli @babel/core @babel/node @babel/preset-env
```
## Step 5. Configure babel.
Create a `.babelrc` file in the root directory.  Add the following lines to it:
```json
{
    "presets": ["@babel/preset-env"]
}
```

## Step 6. Install nodemon.
```bash
npm install --save-dev nodemon
```
## Step 7. Create a simple express app.
```javascript
// src/app.js

import express from 'express';

const {
    PORT = 3001
} = process.env;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => 
    console.log(`Listening on http://localhost:${PORT}`)
);
```
## Step 8. Create a script to run nodemon with babel.
Add the following line to the `scripts` section of your `package.json` file:
```json
    "dev": "nodemon --exec babel-node src/app.js"
```
You may also want to change the `"main"` entry to point to `app.js`:
```json
"main": "src/app.js",
```
## Step 9. Start nodemon.
```bash
npm run dev
```