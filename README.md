# General

This is my personal site.

It contains a blog as well as other content.

Stack:
* Language: typescript
* Frontend: react, redux, router
* Backend: node, express
* Database: mongo

# Start backend

Create a file called ./docker/server/private.conf with the following content:
```yml
BLOG_PASSWORD=<>
# Whatever you set it to here will be what the user must enter in the frontend
# to create/edit/delete blog posts.
```

Then start the app and database containers:
```bash
make [build-]start-[dev|prod]
```

# Start frontend

```bash
cd client
npm i
npm start
```
