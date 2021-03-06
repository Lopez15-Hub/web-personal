const { Schema, model } = require("mongoose");

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },

    content: {
      type: String,
      trim: true,
    },
    urlArticle: {
      type: String,
    },

  
  },
  {
    timestamps: true,
  }
);

module.exports = model("Articles", ArticleSchema);
