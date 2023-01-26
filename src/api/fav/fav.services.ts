import Fav from './fav.model';

export function getAllFavs() {
  return Fav.find({});
}

export function getFavById(id: string) {
  return Fav.findById(id);
}

export function createFav (FavsList: Array<Object>){
  return Fav.create(FavsList)

}

export function deleteFav(id: string) {
  return Fav.findByIdAndRemove(id);
}
