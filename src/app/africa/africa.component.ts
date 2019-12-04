import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})
export class AfricaComponent implements OnInit {
  items: Array<{instrument: string, image: string, sound: string, desc: string}> = [];

  constructor() {
    this.items = [
      {instrument: 'Mbira Dzavadzimu', image: 'assets/images/mbira.png', sound: 'assets/sounds/mbira.mp3',
       desc: "Traditional to the Shona People of Zimbabwe, the Mbira Dzavadzimu is an instrument consisting of a wooden board (typically equipped with a resonator) with attached staggered metal tines. The instrument is played by holding it in one’s hand and plucking the tines with the right forefinger, the thumbs, and sometimes the left forefinger, classifying it as a lamellophone. "},
      {instrument: 'Kora', image: 'assets/images/kora.png', sound: 'assets/sounds/kora.mp3',
       desc: "A Mandinka harp used extensively in West Africa that is built from a small calabash cut in half and covered with cow skin to make a resonator with a long hardwood neck. It has 21 strings, each playing a different note. Traditionally, Kora players come from jail families who are storytellers, genealogists, and historians who pass their skills on to their descendants."},
      {instrument: 'Tambin', image: 'assets/images/tambin.png', sound: 'assets/sounds/tambin.mp3',
       desc: "Also known as the Fula Flute, the Tambin is a diagonal diatonic flute without a bell, made from a conical vine, with three finger-holes and a rectangular embouchure with two wings on either side. The Tambin is recognized as the national instrument of the West African Fula. The tambin has been said to bring “tears with its haunting sounds and melodies that reach deep inside one's soul.” The flute was featured in the 2019 Marvel movie Black Panther."},
       {instrument: 'Djembe', image: 'assets/images/djembe.png', sound: 'assets/sounds/djembe.mp3',
       desc: " Originating from West Africa, a djembe is a rope-tuned skin-covered goblet drum played with bare hands. The name djembe originates from the Bambara people’s(from Mali) saying 'Anke djé, anke bé' which translates to 'everyone gather together in peace' and defines the drum's purpose. Traditionally, the djembe is played only by men along with the dunun that always accompany the djembe."},
       {instrument: 'Shekere', image: 'assets/images/shekere.png', sound: 'assets/sounds/shekere.mp3',
       desc: "A West African percussion instrument consisting of a dried gourd with beads or cowries woven into a net covering the gourd. The shaker is made from vine gourds that grow on the ground. The sound of the instrument changes depending on the shape of the gourd. In West Africa, percussion instruments like the Shekere are traditionally played by women."},
       {instrument: 'Ngoni', image: 'assets/images/ngoni.png', sound: 'assets/sounds/ngoni.mp3',
       desc: "A West African string instrument that has a body made of wood or calabash with dried animal skin head stretched over it. The ngoni is capable of producing fast melodies. Traditionally, the ngoni is played to celebrate special occasions and ceremonies. The ngoni is known to have existed since at least 1352, and it is believed that the American banjo is an evolved form of the ngoni after Mande slaves were exported there."},
    ]
  }

  ngOnInit() {
  }

  audio = new Audio();

  playAudio(path:string) {
    this.audio.src = path;
    this.audio.volume = 0.5;
    this.audio.load();
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
