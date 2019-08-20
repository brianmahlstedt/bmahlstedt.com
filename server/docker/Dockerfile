FROM node:latest

# Although the source dir is mounted, you must still copy it here
# so that it knows about it at build time.
COPY ./server /usr/src/app
WORKDIR /usr/src/app
RUN npm install nodemon
RUN npm install
