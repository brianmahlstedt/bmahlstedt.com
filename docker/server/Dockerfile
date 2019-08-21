FROM node:latest

WORKDIR /backend
ENV PATH /backend/node_modules/.bin:$PATH
COPY ./server .
RUN npm install nodemon
RUN npm install
