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

// class A {
//   protected someProperty = "str";
// }

// class B extends A {
//   showProperty() {
//     console.log(this.someProperty);
//   }
// }

// const a = new A();
// const b = new B();

// a.someProperty;
// b.someProperty;

// b.showProperty();

//!=================================

// class House {
//   private street: string;
//   private tenants: string[] = [];

//   constructor(n: string) {
//     this.street = n;
//   }

//   public showAddress(this: House) {
//     console.log(`Address ${this.street}`);
//   }

//   public addTenant(tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//   }
// }

// const house = new House("Main street");

// house.addTenant("Pablo");
// house.addTenant("Marco");
// house.showAddress();

// house.showTenants();

//!=================================

// class House {
//   private tenants: string[] = [];

//   constructor(private readonly type: string, private street: string) {}

//   public showAddress(this: House) {
//     console.log(`Address ${this.street}`);
//   }

//   public showType(this: House) {
//     console.log(`House Type: ${this.type}`);
//   }

//   public addTenant(tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//   }
// }

// class StoneHouse extends House {
//   private chargeOfTheHouse: string;

//   constructor(street: string, generalTenant: string) {
//     super("stone", street);

//     this.chargeOfTheHouse = generalTenant;

//     this.addTenant(generalTenant);
//   }

//   public showTenants(): void {
//     console.log(`General: ${this.chargeOfTheHouse}`);

//     super.showTenants();
//   }
// }

// const stonehouse = new StoneHouse("Stone-World", "Max");

// stonehouse.addTenant("Pablo");
// stonehouse.addTenant("Marco");

// stonehouse.showTenants();
// stonehouse.showType();
// stonehouse.showAddress();

//!=================================

// type PersonInformation = {
//   firstName?: string;
//   lastName?: string;
// };

// class Person {
//   private personInfo: PersonInformation = {};

//   set firstName(value: string) {
//     console.log("firstName added");

//     this.personInfo.firstName = value;
//   }

//   set lastName(value: string) {
//     console.log("lastName added");

//     this.personInfo.lastName = value;
//   }

//   get info() {
//     const { personInfo } = this;

//     // return `${personInfo.lastName} ${personInfo.firstName}`;
//     console.log(`${personInfo.lastName} ${personInfo.firstName}`);
//   }
// }

// const person = new Person();

// person.lastName = "Pupkin";
// person.firstName = "Petha";
// person.info;

//!=================================

// class UseStatic {
//   private static count = 0;

//   constructor() {
//     UseStatic.count += 1;
//   }

//   public static itStaticMethod() {
//     console.log("Run static method");
//   }

//   public showCount() {
//     console.log(UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.itStaticMethod();

//!=================================

// abstract class Plane {
//   protected pilotInCabin = false;

//   public sitInPlane() {
//     this.pilotInCabin = true;
//   }

//   public abstract startEngine(): boolean;
// }

// class Maize extends Plane {
//   public startEngine(): boolean {
//     return true;
//   }
// }

// class Boeing extends Plane {
//   public startEngine(): boolean {
//     return true;
//   }
// }

// class BrokenPlane extends Plane {}

//!=================================

// interface Person {
//   firstName: string;
//   lastName: string;
//   age?: number;
// }

// function greet(person: Person) {
//   console.log(`Hello, ${person.firstName} ${person.lastName}`);
// }

// const pablo: Person = {
//   firstName: "Pablo",
//   lastName: "Escobar",
// };

// greet(pablo);

//!=================================

// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// const user: IPerson = {
//   name: "Pablo",
//   age: 27,

//   greet(phrase) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };

// user.greet("Hey everybody, i'm");

//!=================================

// class Animal {
//   constructor(public name: string) {}

//   say() {
//     console.log("Nothing to say");
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, private speed: number) {
//     super(name);
//   }

//   say() {
//     console.log("Meow!");
//   }

//   run(time: number) {
//     return `${this.name} was runing with speed ${this.speed} during ${time} second`;
//   }
// }

//!=================================

// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// class Person implements IPerson {
//   constructor(public name: string, public age: number) {}

//   greet(phrase: string): void {
//     console.log(`${phrase}, my name is ${this.name}`);
//   }
// }

// const pablo = new Person("Pablo", 27);

// pablo.greet('Hello')

//!=================================

// type ItemType = {
//   name: string;
// };

// class Catalog {
//   showCatalog(items: ItemType[]) {
//     items.forEach((item) => {
//       console.log(item.name);
//     });
//   }
// }

// class Items {
//   private items: ItemType[] = [];
//   setItem(name: string) {
//     this.items.push({ name });
//   }

//   getItems(): ItemType[] {
//     return this.items;
//   }
// }

// const items = new Items();
// const catalog = new Catalog();

// items.setItem("Catalog 1");
// items.setItem("Catalog 2");
// items.setItem("Catalog 3");

// catalog.showCatalog(items.getItems())

//!=================================

// class DB {
//   connection() {
//     console.log("DB connected");
//   }
// }

// class Server {
//   constructor(private database: DB) {}

//   init() {
//     this.database.connection();
//   }
// }

// const db = new DB();
// const server = new Server(db);

// server.init();

//!=================================
//* Агрегація в UML
// class Person {
//   constructor(public name: string) {}
// }

// class Home {
//   private guests: Person[] = [];

//   addGuests(guest: Person) {
//     this.guests.push(guest);
//   }

//   showGuests() {
//     this.guests.map((guest) => console.log(guest.name));
//   }
// }

// const home = new Home();

// const guest1 = new Person("Max");
// const guest2 = new Person("Pablo");
// const guest3 = new Person("Marco");

// home.addGuests(guest1);
// home.addGuests(guest2);
// home.addGuests(guest3);

// home.showGuests();

//!=================================
//* Композиція  в UML

// class Person {
//   constructor(public name: string) {}
// }

// class Home {
//   private tenants: Person[] = [];

//   addTenant(name: string) {
//     const tenant = new Person(name);
//     this.tenants.push(tenant);
//   }

//   showTenant() {
//     this.tenants.map((tenant) => console.log(tenant.name));
//   }
// }

// const home = new Home();

// home.addTenant("Max");
// home.addTenant("Pablo");
// home.addTenant("Marco");

// home.showTenant();

//!=================================
//* Example

// class Captain {
//   constructor(public name: string) {}
// }

// class Ship {
//   private captain: Captain;

//   setCaptain(name: string) {
//     const captain = new Captain(name);
//     this.captain = captain;
//   }

//   sink() {
//     console.log(
//       `Ship is sinking! Captain ${this.captain.name} goes down with the ship!`
//     );
//   }
// }

// const ship = new Ship();

// ship.setCaptain("John");
// ship.sink();

//!=================================
//* Singleton

// class App {
//   private static instance: App;

//   constructor() {
//     if (!App.instance) {
//       App.instance = this;
//     }

//     return App.instance;
//   }
// }

//!=================================
//* Factory

// interface PaymentProcessor {
//   validate(data: any): boolean;
//   pay(amount: number): void;
// }

// class CreditCardProcessor implements PaymentProcessor {
//   validate(data: any): boolean {
//     return true;
//   }

//   pay(amount: number): void {
//     console.log(`Paid ${amount} using Credit Card!`);
//   }
// }

// class PayPalProcessor implements PaymentProcessor {
//   validate(data: any): boolean {
//     return true;
//   }

//   pay(amount: number): void {
//     console.log(`Paid ${amount} using PayPal!`);
//   }
// }

// class BitcoinProcessor implements PaymentProcessor {
//   validate(data: any): boolean {
//     return true;
//   }

//   pay(amount: number): void {
//     console.log(`Paid ${amount} using Bitcoin!`);
//   }
// }

// class PaymentProcessorFactory {
//   static createProcessor(type: string): PayPalProcessor {
//     switch (type) {
//       case "CreditCard".toLowerCase():
//         return new CreditCardProcessor();
//       case "PayPal".toLowerCase():
//         return new PayPalProcessor();
//       case "Bitcoin".toLowerCase():
//         return new BitcoinProcessor();
//       default:
//         throw new Error(`Payment method ${type} is not supported!`);
//     }
//   }
// }

// const processor = PaymentProcessorFactory.createProcessor("bitcoin");

// processor.pay(100);

//!=================================
//* Builder

// class Car {
//   constructor(
//     public model: string,

//     public year: number,

//     public color: string
//   ) {}
// }

// class CarBuilder {
//   private model: string;

//   private year: number;

//   private color: string;

//   setModel(model: string): CarBuilder {
//     this.model = model;
//     return this;
//   }

//   setYear(year: number) {
//     this.year = year;
//     return this;
//   }

//   setColor(color: string) {
//     this.color = color;
//     return this;
//   }

//   build(): Car {
//     return new Car(this.model, this.year, this.color);
//   }
// }

// const builder = new CarBuilder();

// const car = builder
//   .setModel("Tesla Model S")
//   .setYear(2023)
//   .setColor("Red")
//   .build();

// console.log(car);

//* Example

// class QueryBuilder {
//   private table: string = "";
//   private whereParams: string[] = [];
//   private orderBy: string = "";

//   from(table: string): QueryBuilder {
//     this.table = table;
//     return this;
//   }

//   where(condition: string): QueryBuilder {
//     this.whereParams.push(condition);
//     return this;
//   }

//   order(condition: string): QueryBuilder {
//     this.orderBy = condition;
//     return this;
//   }

//   build(): DatabaseQuery {
//     return new DatabaseQuery(this.table, this.whereParams, this.orderBy);
//   }
// }

// class DatabaseQuery {
//   constructor(
//     private table: string,
//     private whereParams: string[],
//     private orderBy: string
//   ) {}

//   query(): void {
//     let query = `SELECT * FROM ${this.table}`;

//     if (this.whereParams.length) {
//       query += ` WHERE ${this.whereParams.join(" AND ")}`;
//     }

//     if (this.orderBy) {
//       query += ` ORDER BY ${this.orderBy}`;
//     }

//     console.log(`Executing query: ${query}`);
//   }
// }

// const builder = new QueryBuilder();
// const dbQuery = builder
//   .from("Users")
//   .where("age > 21")
//   .where("status = 'active'")
//   .order("lastName")
//   .build();

//   dbQuery.query()

//!=================================
//* Adapter

// class OldService {
//   public oldRequest(): string {
//     return "Old Service Request";
//   }
// }

// interface NewInterface {
//   request(): string;
// }

// class Adapter implements NewInterface {
//   constructor(private oldService: OldService) {}

//   public request(): string {
//     const result = this.oldService.oldRequest();

//     return `Adapter: (TRANSLATED) ${result}`;
//   }
// }

// class Client {
//   constructor(private newInterface: NewInterface) {}

//   public useService(): void {
//     console.log(this.newInterface.request());
//   }
// }

// const oldService = new OldService();
// const adapter = new Adapter(oldService);
// const client = new Client(adapter);

// client.useService()

//!=================================
//* Decorator

// interface Coffee {
//   cost(): number;
//   description(): string;
// }

// class SimpleCoffee implements Coffee {
//   cost(): number {
//     return 10;
//   }

//   description(): string {
//     return "Simple coffee";
//   }
// }

// class CoffeeDecorator implements Coffee {
//   constructor(protected coffee: Coffee) {}

//   cost(): number {
//     return this.coffee.cost();
//   }

//   description(): string {
//     return this.coffee.description();
//   }
// }

// class MilkDecorator extends CoffeeDecorator {
//   cost(): number {
//     return this.coffee.cost() + 2;
//   }

//   description(): string {
//     return this.coffee.description() + ", milk";
//   }
// }

// class SugarDecorator extends CoffeeDecorator {
//   cost(): number {
//     return this.coffee.cost() + 1;
//   }

//   description(): string {
//     return this.coffee.description() + ", sugar";
//   }
// }

// let coffee: Coffee = new SimpleCoffee();
// coffee = new MilkDecorator(coffee);
// coffee = new SugarDecorator(coffee);

// console.log(`${coffee.description()} - ${coffee.cost()} dollars`);

//!=================================
//* Facade

type User = {
  id: number;
  name: string;
  email: string;
};

type Address = {
  userId: number;
  street: string;
  city: string;
  country: string;
};

type PaymentData = {
  userId: number;
  cardNumber: string;
  expiryDate: string;
};

class UserService {
  
}