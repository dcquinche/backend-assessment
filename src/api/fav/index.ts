import {Router} from 'express';
import {handleCreateFav, handleDeleteFav, handleGetAllFavs, handleGetFavById} from './fav.controller';
import {isAuthenticated} from '../../auth/local/local.services';

const router = Router();

router.post('/', isAuthenticated, handleCreateFav);
router.delete('/:id', isAuthenticated, handleDeleteFav);
router.get('/', isAuthenticated, handleGetAllFavs);
router.get('/:id', isAuthenticated, handleGetFavById);


export default router;
