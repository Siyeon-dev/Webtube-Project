import express from "express";
import router from "../routes";
import { videos, upload, videoDetial, editVideo, deleteVideo } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get(router.upload, upload);
videoRouter.get(router.videoDetail(), videoDetial);
videoRouter.get(router.editVideo, editVideo);
videoRouter.get(router.deleteVideo, deleteVideo);

export default videoRouter;