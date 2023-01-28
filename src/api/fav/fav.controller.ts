import {Request, Response} from 'express';
import {getAllFavs, getFavById, createFav, deleteFav, updateFavs} from './fav.services';

export async function handleGetAllFavs(req: Request, res: Response, next: Function) {
  try {
    const favs = await getAllFavs();
    return res.status(200).json(favs);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleGetFavById(req: Request, res: Response, next: Function) {
  const { id } = req.params;
  try {
    const fav = await getFavById(id);
    if (!fav) {
      return res.status(404).json({ message: "Fav not found" });
    }
    return res.status(200).json(fav);
  } catch (error) {
    return res.status(500).json(error);
  }

}

export async function handleCreateFav(req: Request, res: Response, next: Function) {
  const data = req.body;
  try {
    const newFavsList = await createFav(data);
    return res.status(200).json(newFavsList);
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

export async function handleUpdateFavs(req: Request, res: Response, next: Function) {
  const { id } = req.params;
  const data = req.body;
  try {
    const newFav = await updateFavs(id, data);
    if (!newFav) {
      return res.status(404).json({ message: "Fav not found" });
    }
    return res.status(200).json({ message: "Fav added" });
    } catch (error) {
    return res.status(500).json(error);
    }
}
