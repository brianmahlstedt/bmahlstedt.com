FROM node

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# . is the build dir, ./server
COPY . /app
RUN npm install nodemon
RUN npm install
