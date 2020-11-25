import express from "express";
import { login } from "./routes/index.mjs";

const PORT = 4001;

const app = express();

app.get("/", (_, res) => {
  res.status(200).send("Simple Test");
});

app.post("/login", login);

app.listen({ port: PORT }, () => {
  console.log(`Server ready at: http://localhost:${PORT}`);
});
