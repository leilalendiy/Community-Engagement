import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {
  items: Array<{instrument: string, image: string, sound: string, desc: string}> = [];

  constructor() {
    this.items = [
      {instrument: 'Trumpet', image: 'assets/images/trumpet.png', sound: 'assets/sounds/trumpet.wav',
       desc: "Well, this is gonna be a very very very long paragraph explaining the instruments and whatnot"},
      {instrument: 'Violin', image: 'assets/images/violin.png', sound: 'assets/sounds/violin.mp3',
       desc: "Well, this is gonna be a very very very long paragraph explaining the instruments and whatnot"},
      {instrument: 'Cat', image: 'assets/images/cat.png', sound: 'assets/sounds/mockingbird.wav',
       desc: "Well, this is gonna be a very very very long paragraph explaining the instruments and whatnot"},
    ]
  }

  ngOnInit() {
  }

  audio = new Audio();

  playAudio(path:string){
    this.audio.src = path;
    this.audio.volume = 0.5;
    this.audio.load();
    this.audio.play();
  }
  stopAudio(){
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
