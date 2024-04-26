// let total: number = 100;
// let name1: string = "Bob";
// let isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;

// let age = 10

// age = '10'

// const numbers: number[] = [1, 2, 34];
// numbers.push("6");

// const user: { name: string; age: number } = {
//   name: "Bob",
//   age: 18,
// };

// type User = {
//   name: string;
//   age: number | string;
// };

// const user: User = {
//   name: "Bob",
//   age: 18,
// };

// type eventType = "lesson" | "deadline";

// const event: eventType = "homework";

// let age: any = 10;
// age = "Bob";
// age = false;

// let name1: unknown = "Bob";

// name1 = 12
// name1.toFixed()

// type Size = "small" | "medium" | "large";

// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

// const button: Size = "large";
// const button2: Sizes = Sizes.large;

// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// console.log(add(5, 5));

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// add(2,6)

// type User {
//   name: string
// }

// function greating(user: User): void {
//   console.log(`hello ${user.name}`);
// }

// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// function userConstructor(name: string, age: number, hobby: string): User {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: () => {};
// };

// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "CAD",
//   start() {
//     console.log("Start");
//   },
// };

//!=================================

// type User = {
//   name: string;
//   age: number;
//   role?: string;
// };

// const user: User = {
//   name: "Bob",
//   age: 12,
// };

// const admin: User = {
//   name: "John",
//   age: 23,
//   role: "Admin",
// };

//!=================================

// type Goods = {
//   [key: string]: number;
// };

// const fruits: Goods = {
//   apple: 15,
//   banana: 30,
//   orange: 30,
// };
// const frozenGoods: Goods = {
//   iceCream: 25,
//   fish: 30,
//   berry: 10,
// };

//!=================================

// type Interface = {
//   [key: string]: string | number;
// };

// const userInfo: Interface = {
//   name: "Bob",
//   age: 23,
//   country: "Canada",
// };

// const bookDetails: Interface = {
//   title: "Bible",
//   pageCount: 350,
// };

//!=================================

// function identity<T>(arg: T): T {
//   return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);
// let output3 = identity<object>({});
// let output4 = identity<Array<any>>([]);

//!=================================

// function revers<T>(items: T[]): T[] {
//   return items.reverse();
// }

// const numbers = revers<number>([1, 2, 3, 4, 5]);
// console.log(numbers);

// const string = revers<string>(["a", "b", "c", "d"]);
// console.log(string);

//!=================================

// function lengthOfObject<T extends { length: number }>(obj: T): number {
//   return obj.length;
// }

// lengthOfObject({ name: "Mango", length: 10 });

// console.log(lengthOfObject({ name: "Mango", length: 10 }));

//!=================================
// const student = {
//   name: "John",
//   age: 25,
// };

// function getProperty<ObjectType, KeyType extends keyof ObjectType>(
//   obj: ObjectType,
//   key: KeyType
// ): ObjectType[KeyType] {
//   return obj[key];
// }

// const studentName = getProperty(student, "name");
// console.log(studentName);

// const studentAge = getProperty(student, "age");
// console.log(studentAge);

// const studentAddress = getProperty(student, "address");
// console.log(studentAddress);

//!=================================

// type Todo = {
//   title: string;
//   description: string;
//   completed: boolean;
// };

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
//   return { ...todo, ...fieldsToUpdate };
// }

// const todo1: Todo = {
//   title: "Learn TypeScript",
//   description: "Study the basics of TypeScript",
//   completed: false,
// };

// const todo2 = updateTodo(todo1, {
//   description: "Study generics in TypeScript",
// });

// console.log(todo2)

//!=================================

// type User = {
//   name: string;
//   age: number;
// };

// const john: Readonly<User> = {
//   name: "John",
//   age: 30,
// };

// john.age = 31;

// const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// numbers.push(6);
// numbers[0] = 0;

//!=================================

// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };

// type PersonSummary = Pick<Person, "name" | "age">;

// const johnSummary: PersonSummary = {
//   name: "John",
//   age: 30,
// };

//!=================================

// interface Person {
//   name: string;
//   age: number;
//   address: string;
//   location?: string;
// }

// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };

// type PersonWithoutAddress = Omit<Person, "address" | "age">;

// const john: PersonWithoutAddress = {
//   name: "John",
//   // age: 30,
//   // address: "123 Main St.", // Это свойство тут недопустимо
// };

//!=================================

//* Record<K, T>

// type CityDatabase = Record<string, number>;

// const database: CityDatabase = {
//   Kyiv: 2884000,
//   Kharkiv: 1441000,
//   Odesa: 1015000,
// };

// database.Lviv = 721301;

// console.log(database);

//!=================================

// interface Person {
//   firstName: string;
//   lastName: string;
//   age?: number;
// }

// function great(person: Person) {
//   console.log(`Hello, ${person.firstName} ${person.lastName}`);
// }

// const john: Person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// great(john)

//!===================

// type IPerson = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// };

// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMessage(): void;
// }

// let user: IPerson;

// user = {
//   name: "Anthony",
//   age: 21,

//   greet(phrase) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };

// user.greet("Hello everybody, i'm");

//!=================================

// import { IPerson, IPilot } from "./type";

// class Pilot implements IPerson, IPilot {
//   constructor(public name: string, public age: number) {
//     if (this.age < 28) {
//       throw new Error("Pilot is too young");
//     }
//   }

//   greet(phrase: string): void {
//     console.log(`${phrase} ${this.name}`);
//   }

//   flyMessage(): void {
//     console.log("Самолет набрал высоту, всем приятного полета!");
//   }

//   setAutopilot(): void {
//     console.log("Автопилот включен!");
//   }
// }

// abstract class Plane {
//   protected pilot?: IPilot;

//   public sitInPlane(pilot: IPilot): void {
//     this.pilot = pilot;
//   }

//   public abstract startEngine(): boolean;
// }

// class Boeing extends Plane {
//   public startEngine(): boolean {
//     if (!this.pilot) {
//       throw new Error("No pilot in the cabin");
//     }

//     console.log("Запуск турбин!");

//     this.pilot.flyMessage();
//     return true;
//   }
// }

// const boeing = new Boeing();
// const pilot = new Pilot("Anthony", 32);

// pilot.greet("Bac приветствует капитан корабля");
// pilot.setAutopilot();

// boeing.sitInPlane(pilot);
// boeing.startEngine();

// class Terrorist implements IPilot {
//   bluff(phrase: string): void {
//     console.log(phrase);
//   }

//   flyMessage(): void {
//     console.log("Наші вимоги - 9 мільйонів, інакше ми вб'ємо всіх заручників.");
//   }
// }

// const pilot2 = new Terrorist();
// pilot2.bluff("Ви захопили цей літак!");
// boeing.sitInPlane(pilot2);
// boeing.startEngine()

//!=================================

// interface ITest {
//   readonly name: string;
// }

// const person: ITest = {
//   name: "Person Name",
// };

// person.name = "Another Name";

// console.log(person)

//!=================================

// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot extends IPerson {
//   flyMessage(): void;
// }

//!=================================

// interface IPerson {
//   name?: string;
//   age: number;
// }

// class Person implements IPerson {
//   name?: string;

//   constructor(public age: number) {}

//   setName(n: string): void {
//     this.name = n;
//   }
// }

//!=================================

// class ClassA {
//   public myMethod() {
//     return "i'm a class A";
//   }
// }

// class ClassB extends ClassA {}

// const b = new ClassB();

// console.log(b.myMethod());

//!=================================

// class classA {
//   private process1() {
//     return 1;
//   }
//   private process2() {
//     return 2;
//   }
//   private process3() {
//     return 3;
//   }

//   public superProcess() {
//     return this.process1() + this.process2() + this.process3();
//   }
// }

// const b = new classA()

// console.log(b.superProcess())

//!=================================

// class House {
//   street: string;

//   constructor(n: string) {
//     this.street = n;
//   }

//   showAddress(this: House) {
//     console.log(`Address: ${this.street}`);
//   }
// }

// const house = new House("Main street");

// house.showAddress();

// const houseCopy = { street: "Dummy", showAddress: house.showAddress };

// houseCopy.showAddress();

//!=================================

class A {
  private someProperty = "str";
}

class B extends A {
  showProperty() {
    console.log(this.someProperty);
  }
}
