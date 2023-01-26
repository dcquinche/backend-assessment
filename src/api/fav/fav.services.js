const Fav = require('./fav.model');

function getAllFavs() {
  return Fav.find({});
}

function getFavById(id) {
  return Fav.findById(id);
}

function createFav (FavsList){
  return Fav.create(FavsList)

}

function deleteFav(id) {
  return Fav.findByIdAndRemove(id);
}

module.exports = {getAllFavs, getFavById, createFav, deleteFav}
