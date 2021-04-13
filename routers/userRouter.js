import express from "express";
import { change_password, edit_profile, users, user_detail } from '../controllers/userController';
import routes from "../routes";
const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.user_detail, user_detail);
userRouter.get(routes.edit_profile, edit_profile);
userRouter.get(routes.change_password, change_password);

export default userRouter;