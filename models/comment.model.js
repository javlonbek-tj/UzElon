const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Comment', commentSchema);
