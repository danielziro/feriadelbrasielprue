const { Router } = require('express');
const router = Router();
const {getUsers, createuser, getUser, udapteUser, deleteUser} = require('../controllers/users.controllers');

router.route('/')
    .get(getUsers)
    .post(createuser);

router.route('/:id')
    .get(getUser)
    .put(udapteUser)
    .delete(deleteUser);

module.exports = router;    