const mongoose = require('mongoose');
const router = require('express').Router();
const Articles = mongoose.model('Articles');

router.post('/', (req, res, next) => {
    // Deconstruct and distinguish the request body from the blog post body.
    const { body } = req;
    const { body: blogPost, password } = body;
    
    if(!blogPost) {
        return res.status(422).json({
            errors: {
                body: 'is required',
            },
        });
    }

    if(password !== process.env.BLOG_PASSWORD) {
        return res.status(401).json({
            errors: {
                password: 'is incorrect',
            },
        });
    }

    const finalArticle = new Articles({ body: blogPost });
    return finalArticle.save()
        .then(() => res.json({ article: finalArticle.toJSON() }))
        .catch(next);
});

router.get('/', (req, res, next) => {
    return Articles.find()
        .sort({ createdAt: 'descending' })
        .then((articles) => res.json({ articles: articles.map(article => article.toJSON()) }))
        .catch(next);
});

router.param('id', (req, res, next, id) => {
    return Articles.findById(id, (err, article) => {
        if(err) {
            return res.sendStatus(404);
        } else if(article) {
            req.article = article;
            return next();
        }
    }).catch(next);
});

router.get('/:id', (req, res, next) => {
    return res.json({
        article: article.article.toJSON(),
    });
});

router.patch('/:id', (req, res, next) => {
    // Deconstruct and distinguish the request body from the blog post body.
    const { body } = req;
    const { body: blogPost, password } = body;

    if(typeof blogPost !== 'undefined') {
        req.article.body = body.body;
    }

    if(password !== process.env.BLOG_PASSWORD) {
        return res.status(401).json({
            errors: {
                password: 'is incorrect',
            },
        });
    }

    return req.article.save()
        .then(() => res.json({ article: req.article.toJSON() }))
        .catch(next);
});

router.delete('/:id', (req, res, next) => {
    const { password } = req.body

    if(password !== process.env.BLOG_PASSWORD) {
        return res.status(401).json({
            errors: {
                password: 'is incorrect',
            },
        });
    }

    return Articles.findByIdAndRemove(req.article._id)
        .then(() => res.sendStatus(200))
        .catch(next);
});

module.exports = router;
