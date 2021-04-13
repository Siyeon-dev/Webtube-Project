import express from "express";
import routes from "../routes";
const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send('Users'));
userRouter.get(routes.user_detail, (req, res) => res.send('User Detail'));
userRouter.get(routes.edit_profile, (req, res) => res.send('Edit Profile'));
userRouter.get(routes.change_password, (req, res) => res.send('Change Password'));

export default userRouter;