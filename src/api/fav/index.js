const {Router} = require('express');
const {handleCreateFav, handleDeleteFav, handleGetAllFavs, handleGetFavById} = require('./fav.controller');

const router = Router();

router.post('/', handleCreateFav);
router.delete('/:id', handleDeleteFav);
router.get('/', handleGetAllFavs);
router.get('/:id', handleGetFavById);

module.exports = router;
