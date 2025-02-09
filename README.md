# PWA RENDER

## Description
This project is J.A.T.E. A JATE project typically focuses on facilitating the development of Java applications,
 providing a structured approach for managing projects. 
BootCamp students use Jate, an online text editor for writing and sharing texts, 
primarily because it offers features like distraction-free writing, autosave functionality, 
and the ability to easily export their work. It supports collaborative writing and allows users to focus 
on their content without the clutter of traditional word processors

## User Story
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Critiera
```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## Installation

```md
1. You'll need to run to install the node required dependencies after you clone the install by running:
npm i

2. You will need to build the dist folder:
npm run start

3. Open Chrome Browser: localhost:3000
```

## Links
GitHub: https://github.com/meg-an321/pwd-render-demo

Render.com: https://dashboard.render.com/web/srv-crk80drqf0us73df2f50/deploys/dep-crk80drqf0us73df2f90