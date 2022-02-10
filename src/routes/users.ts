import express from 'express';
import controller from "../controllers/users";
const router = express.Router();

router.get("/users/:id", controller.getUser);
router.get("/users", controller.getUsers);
router.post("/users", controller.createUser)
router.delete("/users", controller.deleteUsers)

export = router;
