import { NextFunction, Request, Response } from "express";

interface User {
  id: Number;
  firstName: String;
  lastName: String;
  age: Number;
}

const getUser = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: {
      id: req.params.id,
      firstName: (Math.random() + 1).toString(36).substring(7),
      lastName: (Math.random() + 1).toString(36).substring(7),
      age: Math.floor(Math.random() * 50),
    },
  });
};

const getUsers = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
      message: [{
        id: Math.floor(Math.random() * 1000),
        firstName: (Math.random() + 1).toString(36).substring(7),
        lastName: (Math.random() + 1).toString(36).substring(7),
        age: Math.floor(Math.random() * 50),
      }, {
        id: Math.floor(Math.random() * 1000),
        firstName: (Math.random() + 1).toString(36).substring(7),
        lastName: (Math.random() + 1).toString(36).substring(7),
        age: Math.floor(Math.random() * 50),
      }, {
        id: Math.floor(Math.random() * 1000),
        firstName: (Math.random() + 1).toString(36).substring(7),
        lastName: (Math.random() + 1).toString(36).substring(7),
        age: Math.floor(Math.random() * 50),
      }, {
        id: Math.floor(Math.random() * 1000),
        firstName: (Math.random() + 1).toString(36).substring(7),
        lastName: (Math.random() + 1).toString(36).substring(7),
        age: Math.floor(Math.random() * 50),
      }],
    });
  };

export default { getUser, getUsers };
