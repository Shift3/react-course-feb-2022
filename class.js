export class Animal{
  constructor(type, legs){
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = 'Loud noise'){
    console.log(sound);
  }
}