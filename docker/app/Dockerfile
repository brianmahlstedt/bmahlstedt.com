FROM node as build
WORKDIR /src
ENV PATH /src/node_modules/.bin:$PATH
COPY package.json /src/package.json
RUN npm install
COPY . /src
RUN npm run build

FROM node
WORKDIR /src
COPY --from=build /src/build /src/build
EXPOSE 8080
CMD ["npx", "serve", "-l", "8080", "-s", "build"]
