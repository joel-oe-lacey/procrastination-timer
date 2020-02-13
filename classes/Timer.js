class Timer {
  constructor(minutes, seconds) {
    this.minutes = parseInt(minutes);
    this.seconds = parseInt(seconds);
    this.currTime = 0;
  }
}

export default Timer;