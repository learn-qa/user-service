import { NextFunction, Request, Response } from "express";

import { MongoClient } from "mongodb";

interface User {
  id: Number;
  firstName: String;
  lastName: String;
  age: Number;
}

const client = new MongoClient("mongodb://localhost:3456/sampleapp");

const getUser = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await client.connect();

    let db = client.db("sampleapp");
    let users = db.collection("users");
    const query = { id: parseInt(req.params.id) };
    const user = await users.findOne(query);

    return res.status(200).json({
      message: user,
    });
  } finally {
    await client.close();
  }
};

const getUsers = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await client.connect();

    let db = client.db("sampleapp");
    let users = db.collection("users");
    const user = await users.find().toArray();

    return res.status(200).json({
      message: user,
    });
  } finally {
    await client.close();
  }
};

const createUser = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let age = req.body.age;
  let address = req.body.address;

  try {
    await client.connect();

    let db = client.db("sampleapp");
    let users = db.collection("users");
    const user = await users.findOne(
      {},
      { sort: { id: -1 }, projection: { id: 1 } }
    );
    let id = user?.id + 1;

    if (isNaN(id)) id = 1;

    const doc = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      age: age,
      address: address,
    };

    await users.insertOne(doc);

    return res.status(200).json({
      message: id,
    });
  } finally {
    await client.close();
  }
};

const deleteUsers = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await client.connect();

    let db = client.db("sampleapp");
    let users = db.collection("users");
    const user = await users.deleteMany({});

    return res.status(200).json({});
  } finally {
    await client.close();
  }
};

export default { getUser, getUsers, createUser, deleteUsers };
