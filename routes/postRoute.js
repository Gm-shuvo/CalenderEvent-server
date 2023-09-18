import express from "express";
import { createPost,  updatePost ,getPost, deletePost  } from "../controllers/postController.js";

const router = express.Router();
router.post('/post', createPost)
router.get('/post', getPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

export default router;