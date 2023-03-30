import { formatNumber } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pagina-relogio',
  templateUrl: './pagina-relogio.component.html',
  styleUrls: ['./pagina-relogio.component.less']
})
export class PaginaRelogioComponent implements OnInit, OnDestroy{

  //Variáveis relógio
  currentDate = new Date();
  clockInterval: any;

  //Variáveis cronômetro
  telaMilli = "0";
  telaSeconds = "0";
  telaMinutes = "0";
  timerInterval: any;
  isPaused:boolean = true;

  //Variáveis cronômetro - tempo total
  timer = 0;
  lapTimer = 0;
  millisVal = 0;
  secondVal = 0;
  minuteVal = 0;

  //Variáveis cronômetro - lap
  laps:string[] = [];
  lapMillisVal = 0;
  lapSecondVal = 0;
  lapMinuteVal = 0;

  ngOnInit(){
    this.startTime()
  }

  checkTime(time: number){
    return (time < 10) ? "0" + time : time; 
  }

  startTime() {
    this.clockInterval = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  stopwatchStart() {
    this.stopwatchPause();
    this.isPaused = false;
    this.timerInterval = setInterval(() =>{
      this.updateTimer(this.timer, this.millisVal, this.secondVal, this.minuteVal, this.telaMilli, this.telaSeconds, this.telaMinutes);
      this.updateTimer(this.lapTimer, this.lapMillisVal, this.lapSecondVal, this.lapMinuteVal, null, null, null);
    }, 1000 / 60);
  }
  
  stopwatchPause(){
      clearInterval(this.timerInterval);
      this.isPaused = true;
  }

  stopwatchLap(){
    if(!this.isPaused){
      this.laps.unshift(
        formatNumber(this.lapMinuteVal, 'en-US', '2.0-0') + ":" +
        formatNumber(this.lapSecondVal, 'en-US', '2.0-0') + ":" +
        formatNumber(this.lapMillisVal, 'en-US', '2.0-0') + " |    | " +
        formatNumber(this.minuteVal, 'en-US', '2.0-0') + ":" +
        formatNumber(this.secondVal, 'en-US', '2.0-0') + ":" +
        formatNumber(this.millisVal, 'en-US', '2.0-0')
      )
      this.lapTimer = 0;
    }
  }

  stopwatchReset() {
    this.stopwatchPause();
    this.timer = 0;
    this.lapTimer = 0;
    this.millisVal = 0;
    this.secondVal = 0;
    this.minuteVal = 0;
    this.lapMillisVal = 0;
    this.lapSecondVal = 0;
    this.lapMinuteVal = 0;
    this.telaMilli = "0";
    this.telaSeconds = "0";
    this.telaMinutes = "0";
    this.laps = [];
  }
  
  ngOnDestroy(){
    clearInterval(this.timerInterval);
    clearInterval(this.clockInterval);
  }


// Method to update timer values
  private updateTimer(timer: number, millisVal: number, secondVal: number, minuteVal: number, telaMilli: string | null, telaSeconds: string | null, telaMinutes: string | null): void {
    timer += 1/60;
    millisVal = Math.floor((timer - Math.floor(timer)) * 100);
    secondVal = Math.floor((timer - Math.floor(timer / 60) * 60));
    minuteVal = Math.floor(timer / 60);
    if (telaMilli) {
      telaMilli = millisVal < 10? "0" + millisVal : String(millisVal);
    console.log("aqui " + telaMilli)
    }
    if (telaSeconds) {
      telaSeconds = secondVal < 10? "0" + secondVal : String(secondVal);
    }
    if (telaMinutes) {
      telaMinutes = minuteVal < 10? "0" + minuteVal : String(minuteVal);
    }
  }
}