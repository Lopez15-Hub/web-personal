const { Router } = require("express");
const router = Router();
const {getArticles,createArticle,deleteArticle,getOneArticle,updateArticle} = require('../controllers/articles.controllers');
const upload = require('../assets/storage');
router.route('/')

.get(getArticles)

.post(createArticle);




// TIPOS DE PETICIONES .post() .get() .put() .delete()

router.route('/:id')
.delete(deleteArticle)
.get(getOneArticle);








module.exports = router;