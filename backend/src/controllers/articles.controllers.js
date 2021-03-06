const ArticleCtrl = {};
const Article = require("../models/Articles");
const multer = require("multer");
ArticleCtrl.getArticles = async (req, res) => {
  const Articles = await Article.find();
  res.json(Articles);
};

ArticleCtrl.createArticle = async (req, res) => {
  const { title, subtitle, content, urlArticle } = req.body;

  const newArticle = new Article({
    title,
    subtitle,
    content,
    urlArticle,
  });

  await newArticle.save();
  res.json({ messaje: "Article CREATED" });
};
ArticleCtrl.deleteArticle = async (req, res) => {

  await Article.findByIdAndDelete(req.params.id);
  res.json({ messaje: "DELETED - Article" });
};
ArticleCtrl.updateArticle = async (req, res) => {
    const { title, subtitle, content, urlArticle } = req.body;
    await Article.findOneAndUpdate(req.params.id, {
    title,
    subtitle,
    content,
    urlArticle,
  });
  res.json({ messaje: "Article Updated" });
};

ArticleCtrl.getOneArticle = async(req,res)=>{
  const article = await Article.findById(req.params.id);
  res.json(article);
}
module.exports = ArticleCtrl;
