# The Movie Database API - React

![Movie DB](./src/images/gif.gif)

[![Demo](https://img.shields.io/badge/Go-to_the_app-red.svg?style=flat-square)](https://gallant-poitras-b03cd8.netlify.app/)


## Introduction 
Welcome! This is an example of a React application with the purpose of exploring my React & SCSS Front-end skills. A simple SPA will be created based on the provided mockup and make a few API calls to a public web API of [theMovieDB].

## Features
The main feature of this project is to show movies that can be filtered by name and year. Still taking into account the whole mobile friendly part. Client side caching were implemented in the initials request of the app, and its caching is settled for a period of 10 minutes, after that when the user request the initials data it will be set again.
Filters by genre, language and min. vote were not implemented.

The existing features in the project are:
- Discover movies page
- Filter movies by name and year (with debounce approach)
- Automated tests
- Lazy loading 
- Error boundaries
- React hooks
- Client side caching
- Web workers / PWA
- Custom hooks


Packages & Technologies used in the repo:
- `axios`
- `sass`
- `react-router-dom`
- `styled-components`
- `lodash.debounce`
- `testing-library`
- `jest-dom`


## Run it locally

Before clone the repository locally, you will have to create your api key to be placed in the .env file.

```sh
  # Clone this repository
  $ git clone https://github.com/ruimartins21/movie-db-react.git

  # Go into the repository
  $ cd movie-db-react

  # Install dependencies
  $ yarn # npm install

  # Setup the environment variables
  $ cp .env.example .env # and fill it with your own theMovieDB api key

  # Run the app
  $ yarn start # npm run start
```

[theMovieDB]: <https://www.themoviedb.org/documentation/api>