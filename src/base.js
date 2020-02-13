import $ from 'jquery';
import Tasks from '../classes/Task.js';
import TaskContainer from '../classes/TaskContainer.js';
import Timer from '../classes/Timer.js';
//let sampleTasks
let TaskCont = new TaskContainer();
let selected = [];

//need to capture inputs from form
const captureTask = e => {
  e.preventDefault();
  const id = Date.now();
  const intd = $('.task-input-intd').val();
  const task = $('.task-input-task').val();
  const minutes = $('.task-input-minutes').val();
  const seconds = $('.task-input-seconds').val();
  TaskCont.tasks.push({id, intd, task, minutes, seconds})
  showTimer();
}

const showTimer = () => {
  $('.task').toggleClass('hide');
  $('.task-timer').toggleClass('hide');
}

//instance a task class

//push to task container 

//use task method to return html

//map over all in task container and call that method, put output result on innerHTML of section

//use task class to show timer section

//also create a timer. 
//update dom based on current value of timer? 


//store in local storage? 
//start task container with some completed tasks to start?


//event listeners 
$('.task-submit').on('click', captureTask)
// $('.task-type').children.on('click', () => {
//     //want to to selected, if has a value, replace it
//     //that value should display color 
//         //how to conditional render 
//         //just re-render the whole section 

    
// })