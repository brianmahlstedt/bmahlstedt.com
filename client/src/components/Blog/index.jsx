import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Form } from './Article';

class BlogHome extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        const { onLoad } = this.props;

        axios('http://localhost:8000/api/articles')
            .then((res) => onLoad(res.data));
    }

    handleDelete(id) {
        const { onDelete } = this.props;

        return axios.delete(`http://localhost:8000/api/articles/${id}`)
            .then(() => onDelete(id));
    }

    handleEdit(article) {
        const { setEdit } = this.props;

        setEdit(article);
    }

    render() {
        const { articles } = this.props;

        return (
            <div className="container">
                <div className="row pt-5">
                    <Form />
                </div>
                <hr className="mt-5" />
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 offset-lg-3">
                        {articles.map((article) => {
                            return (
                                // Since we're iterating over all blog posts, we must give
                                // each a unique key. This allows react to efficient update
                                // only each card (blog post) if it changes, not the whole
                                // list of the entire history.
                                <div className="card my-3" key={article._id}>
                                    <div className="card-body">
                                        {article.body}
                                        <p className="text-muted">{Date(article.createdAt)}</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <button
                                                onClick={() => this.handleEdit(article)}
                                                className="btn btn-primary mx-3">
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => this.handleDelete(article._id)}
                                                className="btn btn-danger">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    articles: state.blog.articles,
});

const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'BLOG_PAGE_LOADED', data }),
    onDelete: id => dispatch({ type: 'DELETE_ARTICLE', id }),
    setEdit: article => dispatch({ type: 'SET_EDIT', article }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogHome);
