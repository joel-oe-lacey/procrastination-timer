import $ from 'jquery';
import Task from '../classes/Task.js';
import TaskContainer from '../classes/TaskContainer.js';
const sampleTaskData = [
  {
    id: 1,
    intd: 'work on this project',
    task: '',
    minutes: '180',
    seconds: '0'
  },
  {
    id: 2,
    intd: 'pay mortgage',
    task: 'put more mustard stains on this shirt',
    minutes: '4',
    seconds: '30'
  },
  {
    id: 3,
    intd: 'clean the windows',
    task: 'fight off police trying to evict me with a broomstick',
    minutes: '180',
    seconds: '0'
  }
]
    
const wordsOfShame = [
  'Unbelievable, I\'m so dissapointed',
  'What would your mother think?',
  'God is watching.',
  'Why do today, what you could completely ignore?',
  'I hate you.',
  'Your high school teacher was right',
  'It\'s never too late to give up'
]
const sampleTasks = sampleTaskData.map(task => new Task(task))
let TaskCont = new TaskContainer(sampleTasks);

const captureTask = e => {
  e.preventDefault();
  const id = Date.now();
  const intd = $('.task-input-intd').val();
  const task = $('.task-input-task').val();
  const minutes = $('.task-input-minutes').val();
  const seconds = $('.task-input-seconds').val();

  TaskCont.tasks.unshift(new Task(id, intd, task, minutes, seconds));
  showTimer();
}

const showTimer = () => {
  $('.timer-intd').text(`I was going to: ${TaskCont.tasks[0].intd}`);
  $('.timer-task').text(`But then I: ${TaskCont.tasks[0].task}`);
  $('.task').toggleClass('hide');
  $('.task-timer').toggleClass('hide');
}

const showShameMsg = setInterval(() => {
  $('.timer-shame').text(wordsOfShame[0]);  
  wordsOfShame.push(wordsOfShame.splice(0, 1)[0]);
}, 5000)

const updateTime = (totalTime) => {
  displayTime(totalTime)
  if (totalTime >= 1) {
    setTimeout(() => {
      updateTime(totalTime - 1)
    }   
    , 1000);
  } else {
    clearInterval(showShameMsg)
    return 0 
  }
}

const displayTime = (time) => {  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  $('.timer-time').text(`${minutes} : ${seconds}`)
}

$('.task-submit').on('click', captureTask)
$('.timer-start').on('click', () => {
  updateTime(TaskCont.tasks[0].calcTime())
})

const showTasks = () => {
  console.log(TaskCont.showTasks())
}
showTasks()