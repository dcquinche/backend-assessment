import {Application} from 'express';
import user from './api/user';
import fav from './api/fav';
import authLocal from './auth/local';

function routes(app: Application){
  app.use('/api/users', user);
  app.use('/api/favs', fav);
  app.use('/auth/local', authLocal);
}

export default routes;
