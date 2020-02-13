import $ from 'jquery';
import Tasks from '../classes/Task.js';
import TaskContainer from '../classes/TaskContainer.js';
import Timer from '../classes/Timer.js';
//let sampleTasks
let TaskCont = new TaskContainer();

//need to capture inputs from form
const captureTask = e => {
  e.preventDefault()
  const id = Date.now();
  const intd = $('.task-input-intd').val();
  const task = $('.task-input-task').val();
  const minutes = $('.task-input-minutes').val();
  const seconds = $('.task-input-seconds').val();

  TaskCont.tasks.push({id, intd, task, minutes, seconds})
  console.log(TaskCont)
}
//instance a task class
//push to task container 

//use task class to show timer section
//

//also create a timer. 
//update dom based on current value of timer? 


//store in local storage? 
//start task container with some completed tasks to start?


//event listeners 
$('.task-submit').on('click', captureTask)