const { Router } = require("express");
const router = Router();
const {getAuth, validateAuth} = require('../controllers/users.controller');

router.route('/')

.get(getAuth)

.post(validateAuth);


// TIPOS DE PETICIONES .post() .get() .put() .delete()

router.route('/:id')







module.exports = router;
