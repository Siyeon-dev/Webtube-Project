import express from "express";
import router from "../routes";
import {
	getUpload,
	postUpload,
	videoDetial,
	editVideo,
	deleteVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(router.upload, getUpload);
videoRouter.post(router.upload, uploadVideo, postUpload);

videoRouter.get(router.videoDetail(), videoDetial);
videoRouter.get(router.editVideo, editVideo);
videoRouter.get(router.deleteVideo, deleteVideo);

export default videoRouter;
