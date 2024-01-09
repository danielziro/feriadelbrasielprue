const { Router } = require('express');
const router = Router();
const {getClothe, createClothe, getClothes, udapteClothe, deleteClothe} = require('../controllers/clothes.controllers');

router.route('/')
    .get(getClothes)
    .post(createClothe);

router.route('/:id')
    .get(getClothe)
    .put(udapteClothe)
    .delete(deleteClothe);

module.exports = router;