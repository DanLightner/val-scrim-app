import express from "express";
import { getAllPosts, createPosts, updatePost, getPost, deletePost} from "../controllers/postController.js";

const router = express.Router();


router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", createPosts);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);


export default router;
