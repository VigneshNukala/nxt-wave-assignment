const express = require("express");
const tasksRouter = require("./routes/taskRoute.js");
const app = express();
const PORT = 3001;
app.use(express.json());

const startServer = async () => {
  try {
    app.use("/", tasksRouter);
    app.listen(PORT, () => {
      console.log(`Server Running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
