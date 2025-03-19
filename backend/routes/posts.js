const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs").promises;

const upload = multer({ dest: "uploads/" });

// Get all Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new post
router.post("/", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = null;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
      await fs.unlink(req.file.path);
    }

    // creates post obj off the request
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      imageUrl: imageUrl,
    });

    const newPost = await post.save();
    res.status(201).json({
      ...newPost._doc,
      uploadedImageUrl: imageUrl,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Edit post
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    let imageUrl = post.imageUrl;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
      await fs.unlink(req.file.path);
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    post.imageUrl = imageUrl;

    const updatedPost = await post.save();
    res.json({
      ...updatedPost._doc,
      uploadedImageUrl: imageUrl,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
