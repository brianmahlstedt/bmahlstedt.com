import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
        }

        this.handleChangeField = this.handleChangeField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.articleToEdit) {
            this.setState({
                body: nextProps.articleToEdit.body,
            });
        }
    }

    handleSubmit(){
        const { onSubmit, articleToEdit, onEdit } = this.props;
        const { body } = this.state;

        if(!articleToEdit) {
            return axios.post('http://localhost:8000/api/articles', {
                body,
            })
                .then((res) => onSubmit(res.data))
                .then(() => this.setState({ body: '' }));
        } else {
            return axios.patch(`http://localhost:8000/api/articles/${articleToEdit._id}`, {
                body,
            })
                .then((res) => onEdit(res.data))
                .then(() => this.setState({ body: '' }));
        }
    }

    handleChangeField(key, event) {
        this.setState({
            [key]: event.target.value,
        });
    }

    render() {
        const { articleToEdit } = this.props;
        const { body } = this.state;

        return (
            <div className="col-12 col-lg-6 offset-lg-3">
                <textarea
                    onChange={(ev) => this.handleChangeField('body', ev)}
                    value={body}
                    className="form-control my-3"
                    placeholder="Enter post here"
                />
                <button
                    onClick={this.handleSubmit}
                    className="btn btn-primary float-right">
                    {articleToEdit ? 'Update' : 'Submit'}
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch({ type: 'SUBMIT_ARTICLE', data }),
    onEdit: data => dispatch({ type: 'EDIT_ARTICLE', data }),
});

const mapStateToProps = state => ({
    articleToEdit: state.blog.articleToEdit,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
