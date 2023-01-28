import Fav, {FavDocument} from './fav.model';
import {DocumentDefinition} from 'mongoose';

export function getAllFavs() {
  return Fav.find({}).populate('author', 'email');
}

export function getFavById(id: string) {
  return Fav.findById(id).populate('author', 'email');
}

export function createFav(favsList: DocumentDefinition<Omit<FavDocument, 'createdAt' | 'updatedAt'>>){
  return Fav.create(favsList);
}

export function deleteFav(id: string) {
  return Fav.findByIdAndRemove(id);
}

export function updateFavs(id: string, fav: DocumentDefinition<FavDocument>){
  return Fav.findByIdAndUpdate(id, {$push: {list: fav}});
}
