# Introduction
This is a simple web application to search movies using movie names. When user types a keyword in search box all related movies are listed down below.

# Solution

As a solution i implemented web application to retrieve movies. There two components of there project.

## Api server
The server implemented using Node js and Express framework. Server provides two endpoints to get movies and clear serve cache. OMDB api was used to retrieve movies. The API provides 10 movies per page. But requirement is retrieve 20 movies. Two requests should be sent to the OMDB. So i used promises to handle two async calls for parallel execution. In the backend, Redis cache library used to store cache so we can avoid unnecessary API calls.

## React Web App
The react application used in client side which prompts users to type keywords and retrieve movies. In this app redux is used to handle global state because several components used in app.


# Decisions

## Node Express framework for back-end
Express is a minimal and flexible Node.js web application framework. And it's very fast and easy to develop. 

## Redis for cache handling
Redis provides a structured way to store data in memory. Therefore it's very easy to handle data and Redis performs very fast.


# Time spent for the project
I have spent about 17 hours for the project


# Future Work for production ready

Proper UI design is the most important thing for the user interaction. So if i had more time, i will try to enhance the UI with better user experience using reusable UI components. Better loading and error messages will be implemented. And use better css convention for maintainability.

When we build production ready application it must be a Bug-free product. So i will implement unit tests for each every function in backend and frontend.

Way to categorize errors and display errors in properly instead of display simple error message in frontend is important for better user experience.

Performance testing is very important when go production ready. Therefore i'll do performance testing and optimize the application according to test result.

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
