import express from "express";
import { createChapter, getChapters } from "../controllers/chapters.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getChapters);
router.post("/", auth, createChapter);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch("/:id/likePost", auth, likePost);

export default router;
