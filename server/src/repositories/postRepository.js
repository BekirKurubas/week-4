import Post from "../models/post.js";

async function getAllPosts() {
  const posts = await Post.findAll();
  return posts;
}

async function getPostById(id) {
  const post = await Post.findByPk(id);
  return post;
}

async function createPost(postData) {
  const newPost = await Post.create({
    title: postData.title,
    content: postData.content,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  return newPost;
}

export { getAllPosts, getPostById, createPost };

