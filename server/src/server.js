require("dotenv").config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import models, { connectDb } from "./models";

const app = express();

app.use(bodyParser.json());
app.use(cors());

// The route for getting a list of all todos
app.get("/todos", async (req, res) => {
  const todos = await models.Todo.find();
  res.status(200).json(todos);
  //   res.status(200).json(fakeTodos);
});

// The route for getting a list of all todos, but with a delay
// (to display the loading component better)
app.get("/todos-delay", (req, res) => {
  setTimeout(() => res.status(200).json(fakeTodos), 2000);
});

// The route for creating new todo-list items
app.post("/todos", async (req, res) => {
  const { text } = req.body;
  if (text) {
    const insertedTodo = new models.Todo({
      text,
    });
    // fakeTodos.push(insertedTodo);
    await insertedTodo.save();
    res.status(200).json(insertedTodo);
  } else {
    res
      .status(400)
      .json({ message: "Request body should have a text property" });
  }
});

app.post("/todos/:id/completed", async (req, res) => {
  const { id } = req.params;
  const updatedTodo = await models.Todo.findByIdAndUpdate(
    id,
    {
      isCompleted: true,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (updatedTodo) {
    res.status(200).json(updatedTodo);
  } else {
    res.status(400).json({ message: "There is no todo with that id" });
  }
});

// The route for deleting a todo-list item
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const removedTodo = await models.Todo.findByIdAndDelete(id);
  res.status(200).json(removedTodo);
});

connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});
