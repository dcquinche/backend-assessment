import {Router} from 'express';
import {handleCreateUser} from './user.controller';

const router = Router();

router.post('/', handleCreateUser);

export default router;
