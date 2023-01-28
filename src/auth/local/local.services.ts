import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function signToken(payload: any) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }
  const token = jwt.sign(payload, secret);
  return token;
}

export function verifyToken(token: string) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    return false;
  }
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction){
  const userToken = req.headers?.authorization?.split(' ')[1];
  if (!userToken){
    return res.status(401).json({ message: "invalid user token" });
  }
  const decoded = verifyToken(userToken);
  if (!decoded){
    return res.status(401).json({ message: "token undecoded" });
  }
  next();
  return true;
}
