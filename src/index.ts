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

