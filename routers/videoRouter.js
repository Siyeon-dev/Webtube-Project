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
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(router.upload, getUpload);
videoRouter.post(router.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(router.videoDetail(), videoDetial);

// Edit Video
videoRouter.get(router.editVideo(), getEditVideo);
videoRouter.post(router.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(router.deleteVideo(), deleteVideo);

export default videoRouter;
