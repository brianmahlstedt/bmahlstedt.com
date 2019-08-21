FROM node

WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH
COPY ./client .
RUN npm install
