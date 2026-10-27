


# FROM node:24
# WORKDIR /app

# # Declare the argument passed by docker-compose
# ARG REACT_APP_API_KEY
# # Expose it as an environment variable so the build process can see it
# ENV REACT_APP_API_KEY=$REACT_APP_API_KEY

# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3001
# CMD [ "npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3001"]



# FROM node:20-alpine AS builder

# WORKDIR /app

# # Declare the argument passed by docker-compose
# ARG REACT_APP_API_KEY
# # Expose it as an environment variable so the build process can see it
# ENV REACT_APP_API_KEY=$REACT_APP_API_KEY


# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# FROM nginx:alpine

# COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html

# EXPOSE 3001

# CMD ["nginx", "-g", "daemon off;"]


FROM node:20-alpine AS builder

WORKDIR /app

ARG REACT_APP_API_KEY
ENV REACT_APP_API_KEY=$REACT_APP_API_KEY

COPY package*.json ./
RUN npm install

COPY . .

# Build for Docker at the root URL, not /amazon_clone
RUN PUBLIC_URL=/ npm run build

FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]