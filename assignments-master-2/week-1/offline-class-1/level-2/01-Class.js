
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }

  //static not related to object but to the class
  static myType(){
    console.log("I am an animal")
  }

  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let a = new Animal('dog', 4);
console.log(a.describe());

Animal.myType();