import express from "express";
import morgan from "morgan";
import postsRouter from "./src/routes/posts.js";
import sequelize from "./src/config/database.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}))

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/posts', postsRouter);

app.use((req, res, next) => {
  res.on('finished', async () => {
    await sequelize.close();
  });
  next();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
