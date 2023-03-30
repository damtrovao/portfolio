/*import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-pagina-relogio2',
  templateUrl: './pagina-relogio.component.html',
  styleUrls: ['./pagina-relogio.component.less']
})
export class PaginaRelogioComponent2 implements OnInit{
  currentDate = new Date();
  hour = this.checkTime(this.currentDate.getHours());
  minute =  this.checkTime(this.currentDate.getMinutes());
  second = this.checkTime(this.currentDate.getSeconds());

  stopwatchDate = new Date();
  lapDate = new Date();
  
  laps:string[] = [];
  startingMili = 0;
  lapStartingMili = 0;
  actualMili = 0;
  timeOutId = "";
  pausedMilli = 0;
  flagStart = "";
  flagPause = "";

  displayTelaMilli = "";
  displayTelaSeconds = "";
  displayTelaMinutes = "";

  ngOnInit(){
    this.startTime()
    this.initializeStopwatch();
    this.flagStart = "Start";
    this.flagPause = "Pause";
  }

  initializeStopwatch() {
    this.stopwatchDate.setDate(1);
    this.stopwatchDate.setHours(0);
    this.stopwatchDate.setMinutes(0);
    this.stopwatchDate.setSeconds(0);
    this.stopwatchDate.setMilliseconds(0);
    this.lapDate.setDate(1);
    this.lapDate.setHours(0);
    this.lapDate.setMinutes(0);
    this.lapDate.setSeconds(0);
    this.lapDate.setMilliseconds(0);
  }
  
  checkTime(time: number){
    return (time < 10) ? "0" + time : time; 
  }

  startTime() {
    this.currentDate = new Date();
    this.hour = this.checkTime(this.currentDate.getHours());
    this.minute =  this.checkTime(this.currentDate.getMinutes());
    this.second = this.checkTime(this.currentDate.getSeconds());

    setTimeout(() => {
      this.startTime()
    }, 500);
  }

  stopwatchStart() {
    this.testeFunction();
    this.flagStart = "Start over";
    this.flagPause = "Pause";
    this.startingMili = this.lapStartingMili = Date.now();
    this.laps = [];
    if(this.timeOutId != ""){
      clearTimeout(Number(this.timeOutId));
      this.timeOutId = "";
    };
    this.stopwatchClock();
  }

  stopwatchClock(){
    this.initializeStopwatch();
    this.stopwatchDate.setMilliseconds(Date.now() - this.startingMili);
    this.lapDate.setMilliseconds(Date.now() - this.lapStartingMili);
    this.timeOutId = String(setTimeout(() => {
      this.stopwatchClock()
    }, 10));
  }
  
  stopwatchPause(){
    if(this.timeOutId != ""){
      clearTimeout(Number(this.timeOutId));
      this.timeOutId = "";
      this.pausedMilli = Date.now() - this.startingMili;
      this.flagPause = "Continue";
    } else {
      this.lapStartingMili = this.lapStartingMili - this.startingMili;
      this.startingMili = Date.now() - this.pausedMilli;
      this.lapStartingMili = this.lapStartingMili + this.startingMili;
      
      this.stopwatchClock();
      this.flagPause = "Pause";
    }
  }

  testeFunction() {
    var timerInterval;
    var timer = 0;
    var msVal = 0;
    var secondVal = 0;
    var minuteVal = 0;
    
    timerInterval = setInterval(() =>{
      timer += 1/60;
      msVal = Math.floor((timer - Math.floor(timer)) * 100);
      secondVal = Math.floor((timer));
      minuteVal = Math.floor(timer / 60);
      this.displayTelaMilli = msVal < 10? "0" + msVal : String(msVal);
      this.displayTelaSeconds = secondVal < 10? "0" + secondVal : String(secondVal);
      this.displayTelaMinutes = minuteVal < 10? "0" + minuteVal : String(minuteVal);
    }, 1000 / 60);
  }

  stopwatchLap(){
    if(this.timeOutId != ""){
      this.laps.unshift(
        (this.lapDate.getDate() - 1) + ":" +
        this.lapDate.getHours() + ":" +
        this.lapDate.getMinutes() + ":" +
        this.lapDate.getSeconds() + ":" +
        this.lapDate.getMilliseconds() + " |    | " +
        (this.stopwatchDate.getDate() - 1) + ":" +
        this.stopwatchDate.getHours() + ":" +
        this.stopwatchDate.getMinutes() + ":" +
        this.stopwatchDate.getSeconds() + ":" +
        this.stopwatchDate.getMilliseconds()
      )
      this.lapStartingMili = Date.now();
    }
  }

  stopwatchReset() {
    if(this.timeOutId != ""){
      clearTimeout(Number(this.timeOutId));
      this.timeOutId = "";
    }

    this.initializeStopwatch();
    this.flagStart = "Start";
    this.flagPause = "Pause";
    this.laps = [];
  }
}
  */
