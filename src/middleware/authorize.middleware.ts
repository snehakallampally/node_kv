import express from "express";
import { RequestWithUser } from "../utils/requestWithUser";
import { JWT_SECRET } from "../utils/constant";
import jsonwebtoken from "jsonwebtoken";
import { jwtPayload } from "../utils/jwtPayload";

export const authorize = async (
  req: RequestWithUser,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const token = getTokenFromRequestHeader(req);
    const payload = jsonwebtoken.verify(token, JWT_SECRET);

    req.name = (payload as jwtPayload).name;
    req.email = (payload as jwtPayload).email;
    req.role = (payload as jwtPayload).role;

    return next();
  } catch (error) {
    return next(error);
  }
};
const getTokenFromRequestHeader = (req: RequestWithUser) => {
  const bearerToken = req.header("Authorisation");
  const token = bearerToken ? bearerToken.replace("Bearer", "") : "";
  return token;
};
