import { Request, Response, NextFunction } from 'express';
import {getUserFilter} from '../../api/user/user.services';
import {signToken} from './local.services';

export async function handleLoginUser(req: Request, res: Response, next: NextFunction){
  const {email, password} = req.body;
  console.log(email)
  try {
    const user = await getUserFilter({email});
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validatePassword = await user.comparePassword(password);
    if (!validatePassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const jwtPayload = user.profile;
    const userToken = signToken(jwtPayload);
    return res.status(200).json({ profile: user.profile, userToken });

  } catch (error) {
    return res.status(500).json(error);
  }
}
