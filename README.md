# Introduction
This is a simple web application to search movies using movie names. When user types a keyword in search box all related movies are listed down below.

# Solution

As a solution i implemented web application to retrieve movies. There two components of there project.

## Api server

The server implemented using Node js and Express framework. Server provides two endpoints to get movies and clear serve cache. OMDB api was used to retrieve movies. The API provides 10 movies per page. But requirement is retrieve 20 movies. Two requests should be sent to the OMDB. So i used promises to handle two async calls for parallel execution. In the backend, Redis cache library used to store cache so we can avoid unnecessary API calls.

## React Web App

The react application used in client side which prompts users to type keywords and retrieve movies. In this app redux is used to handle global state because several components used in app.


## Node Express framework for back-end
Express is a minimal and flexible Node.js web application framework. And it's very fast and easy to develop. 

## Redis for cache handling
Redis provides a structured way to store data in memory. Therefore it's very easy to handle data and Redis performs very fast.


# Installation

Open project directory.

rename the file env_dummy to .env if .env file not exist.

Open command line in project root directory and run following command.

### `docker-compose up --build`
This will start server and React app
You can access react app using http://localhost:3000/

### `docker-compose down`
This will removes services

To clear server cache - `http://localhost:8000/api/clear`
