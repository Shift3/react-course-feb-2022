export class Animal{
  constructor(type, legs){
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = 'Loud noise'){
    console.log(sound);
  }

  static returnTen(){
    return 10;
  }

  get metaData(){
    return `This animal of type: ${this.type}, and it has ${this.legs} legs.`;
  }
}

export class Dog extends Animal{
  constructor(type, legs, tail){
    super(type, legs);
    this.tail = tail;
  }

  makeNoise(sound='Bark'){
    console.log(sound);
  }
}