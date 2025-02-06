# Use a Node.js Alpine image for lightweight container
FROM node:22.13.1-bullseye-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Set environment variables for Expo to listen on all interfaces
ENV HOST=0.0.0.0

# Start the Expo development server
CMD ["npx", "expo", "start"]