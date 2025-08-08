class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  
  get AllData() {
    return this.Data();
  }
  
  Data() {
    // console.log("Name is : " + this.name);
    // console.log("Age is : " + this.age);
    // console.log("Address is : " + this.address);
    return {
      name: this.name,
      age: this.age,
      address: this.address
    };
  }
}

const p1 = new Person("Ram", 30, "Mohali");
const dictionary =p1.AllData;
for (const key in dictionary) {
  console.log(key + " : " + dictionary[key]);
}

