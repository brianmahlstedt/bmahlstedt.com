FROM node

WORKDIR /src

ENV PATH /src/node_modules/.bin:$PATH

COPY package.json /src/package.json

RUN npm install
