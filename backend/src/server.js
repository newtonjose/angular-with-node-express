import express from "express";
import { login } from "./routes";

const PORT = 4001;

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).send("Simple Test");
});

app.post("/login", login);

app.listen({ port: PORT }, () => {
  console.log(`Server ready at: http://localhost:${PORT}`);
});
