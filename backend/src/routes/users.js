const { Router } = require("express");
const router = Router();
const {getUsers,createUser,deleteUser,searchUser} = require('../controllers/users.controller');

router.route('/')

.get(getUsers)
.post(createUser);



// TIPOS DE PETICIONES .post() .get() .put() .delete()

router.route('/:id')
.delete(deleteUser)

router.route('/search')
.post(searchUser);






module.exports = router;
