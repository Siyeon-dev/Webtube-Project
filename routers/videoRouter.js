import express from "express";
import router from "../routes";
const videoRouter = express.Router();

videoRouter.get(router.videos, (req, res) => res.send("Videos"));
videoRouter.get(router.upload, (req, res) => res.send("Upload"));
videoRouter.get(router.video_detail, (req, res) => res.send("Video Detail"));
videoRouter.get(router.edit_video, (req, res) => res.send("Edit Video"));
videoRouter.get(router.delete_video, (req, res) => res.send("Delete Video"));

export default videoRouter;