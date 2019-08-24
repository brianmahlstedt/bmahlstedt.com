# General

This is my personal site.

It contains a blog as well as other content.

Stack:
* Language: javascript
* Frontend: react, redux, router
* Backend: node, express
* Database: mongo

# Start backend

Create a file called ./private.conf with the following content:
```yml
BLOG_PASSWORD=<>
# Whatever you set it to here will be what the user must enter in the frontend
# to create/edit/delete blog posts.
```

Then start the frontend/backend/database containers:
```bash
make [build-]start-[dev|prod]
```

If starting the dev stack, the app is available at localhost:3000 and changes
will take effect immediately.

The prod stack is wrapped by my infra repository, with nginx as a reverse proxy
(including domain routing, since it serves multiple sites) and a letsencrypt
container for certs that autorenew.
