const {createUser} = require('./user.services');

async function handleCreateUser(req, res){
  const data = req.body;
  try {
    const user = await createUser(data);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {handleCreateUser}
