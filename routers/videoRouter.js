import express from "express";
import { videos, upload, video_detial, edit_video, delete_video } from '../controllers/videoController';
import router from "../routes";
const videoRouter = express.Router();

videoRouter.get(router.videos, videos);
videoRouter.get(router.upload, upload);
videoRouter.get(router.video_detail, video_detial);
videoRouter.get(router.edit_video, edit_video);
videoRouter.get(router.delete_video, delete_video);

export default videoRouter;