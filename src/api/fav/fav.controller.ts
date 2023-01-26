import {Request, Response} from 'express';
import {getAllFavs, getFavById, createFav, deleteFav} from './fav.services';

export async function handleGetAllFavs(req: Request, res: Response, next: Function) {
  try {
    const favs = await getAllFavs();
    return res.status(200).json(favs);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetFavById(req: Request, res: Response, next: Function) {
  const { id } = req.params;

  const fav = await getFavById(id);

  if (!fav) {
    return res.status(404).json({ message: "Fav not found" });
  }

  return res.status(200).json(fav);
}

export async function handleCreateFav(req: Request, res: Response, next: Function) {
  const data = req.body;
  try {
    const newFavsList = await createFav(data);
    return res.status(201).json(newFavsList);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleDeleteFav(req: Request, res: Response, next: Function) {
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
