# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. Below are steps I've taken to get this up and running. 

This is using Windows 11. 

## Pre-requisite

- Github account
- Git
- Github Desktop
- Nodejs
- VS Code

### Installation

**Create New Folder**

This will serve as the parent directory of where we want to create local repository. In my case, I created a folder called *webapp* in *C:/Github*

In *webapp* folder, on address bar, we can open command-prompt simply by typing `cmd`.

On the subsequent command-prompt terminal, type:

```
npx create-docusaurus@latest www classic
```

This will pull classic template from [Docusaurus](https://docusaurus.io) into a folder called *www*. 

### Initializing for Github

From the same terminal:

```
cd www
git init
git remote add origin https://github.com/<github_username>/<github_repo>.git
git branch -M main
git add .
git commit -m "Your Commit Message"
git push -u origin main
```
This will initialize your *www* folder and ultimately push the content of www folder to your <github_repo>

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

```
$ yarn build
```

This will create a *build* subfolder in your *www* that can be used on any hosting site. On Netlify, the process of creating a live site is simply by drag and drop this folder to Netlify. 

However since this is a note-taking website, it makes sense to create a way to automatically build and update site just by creating on local repository and pushing it to Github. For me, Netlify has the most straightforward way of doing this. 

### Linking Github to Netlify

**I'd recommend to create one build and dropping it to Netlify. This will generate site URL that you can use to configure _docusaurus.config.js_**.

- Start by clicking New Site from Git.
- Creating new project will give you option to choose from Github.
- Github will need to authorize Netlify and choose <github_repo>
- The build command needed:

```
npm run build
```
- The publish directory:

```
build
```

- Click Deploy and you will get to deploy log screen. 

You can refer to [This Netlify Post](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/). 
