import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
	getJoin,
	postJoin,
	getLogin,
	postLogin,
	logout,
} from "../controllers/userController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

// Join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

// Login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
