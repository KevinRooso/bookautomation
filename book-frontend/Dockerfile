# React uses node and alpine here refers to lightweight image which saves space
FROM node:18.17.0-alpine

# This creates a directory inside the container for the application
WORKDIR /app

# package.json contains all the packages of the application
COPY package.json .

# Install dependencies of the react app
RUN npm install

# Copy all the files and folders from first dot (.) which is current to app directory (.) which is docker
COPY . .

# Accept the build argument for the API URL
ARG REACT_APP_API_URL
# Set the environment variable for the React app
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Created React app using vite which runs on 5173 port
EXPOSE 80

# When container is started from image it will run this command , 
# seperating in commas helps to identify that each command has its own role like npm is a command and 
# start is argument, here it takes command from package.json for starting react script 
CMD ["npm","run" ,"dev"]