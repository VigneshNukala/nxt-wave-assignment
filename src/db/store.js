class TaskStorage {
  constructor() {
    this.tasks = [];
  }

  async addTask(item) {
    this.tasks.push(item);
  }

  async getAllTasks(page = 1, limit = 5) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedTasks = this.tasks.slice(startIndex, endIndex);

    return {
      totalTasks: this.tasks.length,
      totalPages: Math.ceil(this.tasks.length / limit),
      currentPage: page,
      tasks: paginatedTasks,
    };
  }
  
  async getTaskById(id) {
    for (const task of this.tasks) {
      if (task.id == id) {
        return task;
      }
    }
  }

  async updateTask(id, title, description) {
    for (const task of this.tasks) {
      if (task.id == id) {
        task.title = title;
        task.description = description;
        return task;
      }
    }
  }

  async deleteTask(id) {
    for (const task of this.tasks) {
      if (task.id == id) {
        const delTask = task;
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        return delTask;
      }
    }
  }
}

const store = new TaskStorage();

module.exports = { store };
