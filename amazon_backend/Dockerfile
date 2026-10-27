

# # Stage 1: Build stage (Explicitly named 'builder')
# FROM node:24 AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . . 
# RUN npm run build

# # Stage 2: Runtime stage
# FROM node:24 AS runtime
# WORKDIR /app
# # Copy package files to install only production dependencies
# COPY package*.json ./
# RUN npm install --omit=dev
# # copy the build only
# COPY --from=builder /app/dist ./dist

# EXPOSE 3000
# # Run the node app 
# CMD [ "node", "dist/app.js" ]

# docker backend
FROM node:20-alpine AS runtime
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
