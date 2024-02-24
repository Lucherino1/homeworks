export class TaskManager {
  static instances = [];

  constructor() {
    this.tasks = [];
    this.timeouts = [];
    this.executionStarted = false;
    TaskManager.instances.push(this);
  }

  static killAllManagers() {
    TaskManager.instances.forEach((instance) => {
      instance.abortExecution();
    });
  }

  addTask(task) {
    this.tasks.push(task);
    if (this.executionStarted) {
      this.executeTask(task);
    }
  }

  async executeTask(task) {
    try {
      await new Promise((resolve) => {
        let timeout = setTimeout(
          resolve,
          Date.parse(task.startAt) - Date.now()
        );
        this.timeouts.push(timeout);
      });
      await task.executor();
      if (task.onFinish) await task.onFinish();
    } catch (err) {
      alert(`Task failed with ${err.message}`);
    }
  }

  startExecution() {
    this.executionStarted = true;
    this.tasks.forEach((task) => this.executeTask(task));
  }

  addOnFinishToTask(taskId, onFinish) {
    this.tasks.forEach((task) => {
      if (task.id === taskId) {
        if (!task.onFinish) {
          task.onFinish = onFinish;
        }
      }
    });
  }

  abortExecution() {
    this.executionStarted = false;
    this.timeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });
  }

  removeTask(taskId) {
    const removedTaskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (removedTaskIndex !== -1) {
      const removedTimeout = this.timeouts[removedTaskIndex];

      clearTimeout(removedTimeout);
      this.timeouts.splice(removedTaskIndex, 1);
      this.tasks.splice(removedTaskIndex, 1);
    }
  }
}
