import express from "express";
import router from "../routes";
import {
	getUpload,
	postUpload,
	videoDetial,
	getEditVideo,
	postEditVideo,
	deleteVideo,
} from "../controllers/videoController";
import { onlyPrivate, uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(router.upload, onlyPrivate, getUpload);
videoRouter.post(router.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail
videoRouter.get(router.videoDetail(), videoDetial);

// Edit Video
videoRouter.get(router.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(router.editVideo(), onlyPrivate, postEditVideo);

// Delete Video
videoRouter.get(router.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
