FROM node as build
WORKDIR /client/src
ENV PATH /client/src/node_modules/.bin:$PATH
COPY package.json /client/src/package.json
RUN npm install
COPY . /client/src
RUN npm run build

FROM node
WORKDIR /client/src
COPY --from=build /client/src/build /client/src/build
EXPOSE 8080
CMD ["npx", "serve", "-l", "8080", "-s", "build"]
