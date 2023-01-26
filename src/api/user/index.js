const {Router} = require('express');
const {handleCreateUser} = require('./user.controller');

const router = Router();

router.post('/', handleCreateUser);

module.exports = router;
