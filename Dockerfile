# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available) into the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application into the working directory
COPY . .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define the command to run your app using CMD which defines your runtime
# Here we use the command "node" to run our app.js file
CMD [ "node", "app.js" ]
