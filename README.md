
## Project Overview
This project is a React app to help me organize my portfolio profile and then display my projects,skills, events, and writing to the world.

## Project is Up and running and if you like it and need a local copy ,follow below instructions to get it up and running in local enviornment 
  - clone the repo using `git clone`
  - navigate to folder `sourav-portfolio`
  - run `npm install` to instal node modules
  - run `npm start` to start the service on `localhost:3000`


## PortFolio Live App Link : https://souravt1992.github.io/sourav-portfolio


## Deployment process for GitHub Pages
Note: this feature is available with react-scripts@0.2.0 and higher.

#Step 1: Add homepage to package.json
The step below is important!

If you skip it, your app will not deploy correctly.

Open your package.json and add a homepage field for your project:

"homepage": "https://souravt1992.github.io/sourav-portfolio",
or for a GitHub user page:

"homepage": "https://souravt1992.github.io",
or for a custom domain page:

"homepage": "https://mywebsite.com",
Create React App uses the homepage field to determine the root URL in the built HTML file.

#Step 2: Install gh-pages and add deploy to scripts in package.json
Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at https://souravt1992.github.io/sourav-portfolio, run:

npm install --save gh-pages
Alternatively you may use yarn:

yarn add gh-pages
Add the following scripts in your package.json:

"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",

The predeploy script will run automatically before deploy is run.

If you are deploying to a GitHub user page instead of a project page you'll need to make one additional modification:

Tweak your package.json scripts to push deployments to master:
"scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
#Step 3: Deploy the site by running npm run deploy
Then run:

npm run deploy

Build will be generated in master branch for Live App :)

#Step 4: For a project page, ensure your project’s settings use master
Finally, make sure GitHub Pages option in your GitHub project settings is set to use the master branch


