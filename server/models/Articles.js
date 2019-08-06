const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArticlesSchema = new Schema({
    body: String,
}, { timestamps: true });

ArticlesSchema.methods.toJSON = function() {
    return {
        _id: this._id,
        body: this.body,
        createAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

mongoose.model('Articles', ArticlesSchema);
