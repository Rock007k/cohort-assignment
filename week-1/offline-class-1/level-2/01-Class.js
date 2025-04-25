
class Animal {
 
    _gender ;
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  setGender(gender){
    this._gender = 
  }
}

let cat = new Animal('Cat', 4);
cat.set
let res = cat.describe();
console.log(`Aloha ${res}`); // Cat

