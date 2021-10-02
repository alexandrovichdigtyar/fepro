
//инкапсуляция = объекты + даные = одно и то же 


/* function Student (tableNumber, points){
    this.tableNumber = tableNumber,
    this.points = points,
    this.avarageMark = function avarageMark(){
        let reducer = (a,b) => a + b; 
        let avgPoint = this.points.reduce(reducer);
        return avgPoint/this.points.length;
    }
}

const students = [ 
    new Student('Student 1', [10,9,8,0,10]), // имя, оценки
    new Student('Student 12', [10,0,8,0,3,4]);
   ];
  */

 /* const personJohn = {
    name: "John",
    sayHello: function() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
  const sysAdmin = {
    name: "Bob",
    __proto__: personJohn
  }
  
  const clientNatalia = {
    name: "Natalia",
    __proto__: personJohn
  }

 */

  function Person(name) {
    this.name = name;
    this.sayHello = function() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
  function Employee(name) {
    this.name = name;

  }
  
  function Client(name) {
    this.name = name;
  }
  
  const personJohn = new Person("John");
  const sysAdmin = new Employee("Bob");
  const clientNatalia = new Client("Natalia");


  sysAdmin.__proto__ = personJohn;
  clientNatalia.__proto__ = personJohn;
  