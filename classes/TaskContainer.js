class TaskContainer {
  constructor(tasks) {
    this.tasks = tasks;
  }

  showTasks() {
    return this.tasks.reduce((acc, task) => {
      acc += task.renderTaskTemplate();
      return acc;
    }, '')
  }
}

export default TaskContainer;