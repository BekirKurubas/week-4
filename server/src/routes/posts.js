import { Router } from 'express';
import { getAllPosts, getPostById, createPost } from '../repositories/postRepository.js';
import morgan from 'morgan'; 

const router = Router();

router.use(morgan('dev'));

router.get('/', async (req, res) => {
  const posts = await getAllPosts();
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const post = await getPostById(id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
});

router.post('/', async (req, res) => {
  console.log("Post arrived")
  const { title, content } = req.body;
  console.log(req.body)
  const post = await createPost({ title, content });
  res.json(post);
});

export default router;
