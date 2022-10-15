const express = require("express");
const { updateUser, deleteUser, getUser, getAllUser } = require("../controllers/user");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const userRouter = express.Router();

//UPDATE
userRouter.put("/:id", verifyUser , updateUser )

//DELETE
userRouter.delete("/:id",verifyUser, deleteUser)

//GET
userRouter.get("/:id",verifyUser, getUser)

//GET ALL
userRouter.get("/",verifyAdmin, getAllUser)

module.exports= userRouter;