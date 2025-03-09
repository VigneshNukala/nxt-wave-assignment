const express = require("express");

const { store } = require("../db/store");
const { v4: uuidv4 } = require("uuid");

const tasksRouter = express.Router();
let newId = 1;

tasksRouter.post("/tasks/", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Title and description are required." });
    }

    // const newId = uuidv4();
    const newTask = {
      id: newId++,
      title,
      description,
      completed: false,
    };

    await store.addTask(newTask);

    return res
      .status(201)
      .json({ status: "Success", message: "Created Task", newTask });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Error", message: "Failed to fetch" });
  }
});

tasksRouter.get("/tasks/", async (req, res) => {
  try {
    const {page, limit} = req.query;
    const tasks = await store.getAllTasks(page, limit);

    return res
      .status(200)
      .json({ status: "Success", message: "Fetched all Tasks", tasks });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "Error", message: "Failed to fetch" });
  }
});

tasksRouter.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "ID is required." });
    }
    const task = await store.getTaskById(id);

    if (!task) {
      return res
        .status(404)
        .json({ status: "error", message: "Task not found" });
    }

    return res
      .status(200)
      .json({ status: "Success", message: "Task fetched successfully", task });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Error", message: "Failed to fetch an item by id" });
  }
});

tasksRouter.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required." });
    }

    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Title and description are required." });
    }

    const task = await store.getTaskById(id);

    if (!task) {
      return res
        .status(404)
        .json({ status: "error", message: "Task not found" });
    }

    const updateTask = await store.updateTask(id, title, description);

    return res
      .status(200)
      .json({ status: "Success", message: "Task Updated", updateTask });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Error", message: "Failed to fetch an item by id" });
  }
});

tasksRouter.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "ID is required." });
    }

    const task = await store.getTaskById(id);
    if (!task) {
      return res
        .status(404)
        .json({ status: "error", message: "Task not found" });
    }

    const deleteTask = await store.deleteTask(id);
    return res
      .status(200)
      .json({ status: "Success", message: "Task Deleted", deleteTask });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Error", message: "Failed to fetch an item by id" });
  }
});

module.exports = tasksRouter;
