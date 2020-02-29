class Task {
  constructor(id, intd, task, minutes, seconds) {
    this.id = id;
    this.intd = intd;
    this.task = task;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  calcTime() {
    return (parseInt(this.minutes) * 60) + parseInt(this.seconds);
  }

  renderTaskTemplate() {

    //create a render on main index 
    return `
        <section class="task-card">
          <h4>I definitely ${this.task}</h4>
          <p>${this.minutes} Minutes</p>
          <p>JK I actually ${this.intd}</p>
        </section>
    `
  }

}

export default Task;