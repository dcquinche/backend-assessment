import {Request, Response} from 'express';
import {createUser} from './user.services';

export async function handleCreateUser(req: Request, res: Response){
  const data = req.body;
  try {
    const user = await createUser(data);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

