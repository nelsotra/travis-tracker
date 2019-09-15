# travis-tracker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## How I setup this project:
  - Frontend: Vue JS
  - Backend: Github Pages (not really a backend, it's just static files)

### To run the Vue JS Frontend locally:
  - download or clone the files
  - In the top level directory, run this command.  It will start up a development server.  It watches for any changes in the app's code so you don't have to shut it down and re-start it after you make changes.
  ```
  npm run serve
  ``` 

  - Once the development server is running, go to the URL it gives you, will be something like:
  ```
    - Local:   http://localhost:8080/travis-tracker/
  ```

  - Make changes to the source code, and after saving, those changes should be immediately visible on the localhost site.

### The File Structure:
  - I'm not using a database to store the information for this project
  - Instead, I'm saving everything in json files and reading the json files in the vue javascript
  - Each adventure has its own json page and a corresponding img folder (both are in the public directory)
  -- I put both the json files and the img folders in the public directory because I thought it would be easier for linking to them after the project has been built.  There are probably better ways of doing what I did.
  - Besides a json file and img folder, each adventure is a vue component.  I probably could have made one generic component and passed into it the specific text for each adventure, but I had planned to create a page specific for each adventure with facts, maps, interesting tidbits,and whatever I felt like, so I wanted each to be a separate page to make that easier.  So far, that hasn't happened, but I'm confident that eventually I'll stop being lazy and do something like that.
  - Besides the vue component for each adventure, there are a few generic components that are used by all of the adventure pages: a way to display a list of the posts, the map, and a header
  - There is a central store that uses Vuex, before everything was static json files, I thought I would be pulling data from somewhere, so I was planning on doing that in the central store and accessing what I needed for each component.  That ended up not happening and each page is fairly independent, but the store is still there if I need it in the future.

### To build the project
  - You could use 'npm run build', and ultimately that's what I'm doing, but to automate the process, I'm using Travis CI for the task.
  - It's setup so that whenever there is a commit to the master branch, Travis CI will detect that, build the vue files, and commit it to a gh-pages branch.  Github then serves the site from that gh-pages branch.
  - The only thing under the gh-pages branch should be the dist folder that gets created after running the 'npm run build' command

### To view the page
  - The final site should be at this url: 
  ```
  https://nelsotra.github.io/travis-tracker
  ```
  - At least until I get a custom domain name.  I should probably do that eventually...