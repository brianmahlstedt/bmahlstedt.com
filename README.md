# General

This is my personal site.

It contains a blog as well as other content.

Stack:
* Language: typescript
* Frontend: react, redux, router
* Backend: node, express
* Database: mongo

# Requirements

```bash
node
mongodb
```

# Start backend

```bash
cd server/
npm i
sudo npm i -g nodemon
BLOG_PASSWORD=<> nodemon app.js
```

The blog password is nominally the acronym for your football app, and the YY
that you developed it for. Whatever you set it to here (including nothing),
will obviously be what you must provide in the frontend to create/edit/delete
blog posts. The other components of the site are not password protected.


# Start frontend

```bash
cd client
npm i
npm start
```
