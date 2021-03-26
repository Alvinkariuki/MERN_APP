import express from "express";
import * as postsFunctions from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", postsFunctions.getPosts);
router.post("/", auth, postsFunctions.createPost);
router.patch("/:id", auth, postsFunctions.updatePost);
router.delete("/:id", auth, postsFunctions.deletePost);
router.patch("/:id/likePost", auth, postsFunctions.likePost);

export default router;
