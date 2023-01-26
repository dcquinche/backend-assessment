const {getAllFavs, getFavById, createFav, deleteFav} = require('./fav.services');

async function handleGetAllFavs(req, res, next) {
  try {
    const favs = await getAllFavs();
    return res.status(200).json(favs);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function handleGetFavById(req, res, next) {
  const { id } = req.params;

  const fav = await getFavById(id);

  if (!fav) {
    return res.status(404).json({ message: "Fav not found" });
  }

  return res.status(200).json(fav);
}

async function handleCreateFav(req, res, next) {
  const data = req.body;
  try {
    const newFavsList = await createFav(data);
    return res.status(201).json(newFavsList);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function handleDeleteFav(req, res, next) {
  const { id } = req.params;
  try {
    const fav = await deleteFav(id);
    if (!fav) {
      return res.status(404).json({ message: "Fav not found" });
    }
    return res.status(200).json({ message: "Fav deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {handleCreateFav, handleDeleteFav, handleGetAllFavs, handleGetFavById}
