import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import postsRouter from "./services/posts/index.js";
import authorsRouter from "./services/authors/index.js";

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());
server.use("/", postsRouter);
server.use("/authors", authorsRouter);

console.table(listEndpoints(server));

server.listen(port, () => {
  console.log("Server is running on port " + port);
});
