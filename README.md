# Portfolio Template

## Technology Stack & Tools

- Javascript (React)
- [Fleek](https://fleek.co/) (Website Deployment)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ cd portfolio_template
$ npm install 
```

### 3. Start App
`$ npm start`

## Fleek Deployment
### 1. Sign in to Fleek.co via GitHub

### 2. Add New Site
Under Hosting click on **Add New Site**

### 3. Connect with GitHub
Click on the **Connect with GitHub** button

### 4. Select Repository
If not shown in the dropdown, you'll want to click near the bottom "**Configure the Fleek app on GitHub**". Configure account, then select the *portfolio_template* repository.

### 5. Configure Deploy Location
Select *IPFS*, this should be the default selection

### 6. Configure Build Options
Deploy Settings should be left at default values, make sure the master branch is selected.

For the basic build settings, it should automatically detect *Create React App*. However, make sure the following values are correct:

- **Framework**: Create React App
- **Docker Image Name**: fleek/create-react-app:node-16
- **Build Command**: npm install && npm run build
- **Publish Directory**: build

You can leave **Base Directory** empty then click on Deploy site.

After the build is complete, the link to the site will be shown at the end of the console output.