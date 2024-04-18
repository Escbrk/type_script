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

type Interface = {
  [key: string]: string | number;
};

const userInfo: Interface = {
  name: "Bob",
  age: 23,
  country: "Canada",
};

const bookDetails: Interface = {
  title: "Bible",
  pageCount: 350,
};
