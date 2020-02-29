class Timer {
  constructor(minutes, seconds) {
    this.totalTime = (parseInt(minutes) * 60) + parseInt(seconds);
    this.currTime = 0;
  }

//   displayTime() {
//     const inputTime = this.totalTime;
//     const minutes = Math.floor(inputTime / 60);
//     const seconds = inputTime % 60;

//     $('.timer-time').text(`${minutes} : ${seconds}`)
//   }

//   updateTime(totalTime) {
//     this.displayTime()
//     if (totalTime >= 1) {
//       setTimeout(this.updateTime(this.totalTime - 1), 1000);
//     } else {
//       return 0
//     }
//     //take time from task
//     //calc total time 
//     //call recursive update time function 
//   }
}

export default Timer;