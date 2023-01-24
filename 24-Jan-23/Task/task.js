
// TASK # 01

// class Shape{
//     #name;
//     #sides;
//     #sideLength;
//     constructor(name, sides, sideLength){
//         this.#sides=sides;
//         this.#name=name;
//         this.#sideLength=sideLength;
//     }
//     calcPerimeter(){
//         return this.#sideLength*this.#sides;
//     }
// }

// let square = new Shape("square", 4, 5);
// console.log(square.calcPerimeter());
// let triangle = new Shape("Triangle", 3, 3);
// console.log(triangle.calcPerimeter());

// TASK # 02

// class Player {
//     #PlayerID;
//     #PlayerName;
//     #PlayerRuns;
//     #PlayerDateofBirth;
//     #PlayerShirtNumber;
//     static totalRuns=0;
//     constructor(PlayerID, PlayerName, PlayerRuns, PlayerDateofBirth, PlayerShirtNumber) {
//         this.#PlayerID = PlayerID;
//         this.#PlayerName = PlayerName;
//         this.#PlayerRuns = PlayerRuns;
//         this.#PlayerDateofBirth = PlayerDateofBirth;
//         this.#PlayerShirtNumber = PlayerShirtNumber;
//         Player.totalRuns = Player.totalRuns+PlayerRuns;
//     }

//     DisplayInfo() {
//         return (`PlayerID is ${this.#PlayerID}\nPlayer Name is ${this.#PlayerName}\nPlayer run is ${this.#PlayerRuns}\nPlayer DOB is ${this.#PlayerDateofBirth}\nPlayer Shirt Number is ${this.#PlayerShirtNumber}`);
//     }

//     GetRuns() {
//         return this.#PlayerRuns;
//     }

//     AddRuns(runs) {
//         this.#PlayerRuns = this.#PlayerRuns + runs;
//     }
// }

// let p1 = new Player(01, "ali", 30, "12-4-42", 99);
// console.log(p1.DisplayInfo());
// p1.AddRuns(90);
// console.log(p1.GetRuns());

// console.log(Player.totalRuns);



// TASK # 03

// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];

// const readingStatusArray = library.map(obj => obj.readingStatus);
// console.log(readingStatusArray);


// TASK # 04

// class BankAccount{
//     #accountId;
//     #accountTitle;
//     #balance; 
//     #emailID;

//     constructor(accountId, accountTitle, balance, emailId){
//         this.#accountId=accountId;
//         this.#accountTitle=accountTitle;
//         this.#balance=balance;
//         this.#emailID=emailId;
//     }


//     setAccountId(accountId){
//         this.#accountId=accountId;
//     }
//     getAccountId(){
//         return this.#accountId;
//     }
//     setAccountTitle(accountTitle){
//         this.#accountTitle=accountTitle;
//     }
//     getAccountTitle(){
//         return this.#accountTitle;
//     }
//     setBalance(balance){
//         this.#balance=balance;
//     }
//     getBalance(){
//         return this.#balance;
//     }
//     setEmailId(emailId){
//         this.#emailID=emailId;
//     }
//     getEmailId(){
//         return this.#emailID;
//     }

//     withdrawAmount(amount){
//         if(this.#balance>=amount){
//             let remaining = this.#balance-amount;
//             return (`withdrawn ${amount}, Remaining ${remaining}`);
//         } else {
//             return (`can not withdraw, not enough balance`);
//         }
//     }
//      depositAmount(amount){
//             this.#balance = this.#balance+amount;
//             return (`${amount} added, Total Balance = ${this.#balance}`);
//      }
// }

// let acc = new BankAccount(99, "ak", 3000, "ak@g.com");
// console.log(acc.getAccountId());
// console.log(acc.getBalance());

// console.log(acc.withdrawAmount(4000));
// console.log(acc.depositAmount(10000));

// TASK # 05

// class Payment{
//     AmountOfPayment;
//     constructor(amountOfPayment){
//         this.AmountOfPayment=amountOfPayment;
//     }
//     paymentDetails(){
//         return this.AmountOfPayment;
//     }
// }
// class Cashpayment extends Payment{
//     constructor(AmountOfPayment){
//         super(AmountOfPayment);
//     }
//     paymentDetails(){
//         return `Payment ${this.AmountOfPayment} in cash`;
//     }
// }
// class CardPayment extends Payment{
//     constructor(AmountOfPayment){
//         super(AmountOfPayment);
//     }
//     paymentDetails(){
//         return `Payment ${this.AmountOfPayment} in in Card`;
//     }
// }

// class CreditCards extends CardPayment{
//     #nameOnCard; 
//     #expirationDate;
//     #cardNumber;
//     constructor(nameOnCard, expirationDate, cardNumber, AmountOfPayment){
//         super(AmountOfPayment);
//         this.#nameOnCard=nameOnCard;
//         this.#expirationDate=expirationDate;
//         this.#cardNumber=cardNumber;
//     }

//     PaymentDetails(){
//         return `Name: ${this.#nameOnCard}, expiry: ${this.#expirationDate}, Number: ${this.#cardNumber}, credited: ${this.AmountOfPayment}`;
//     }
// }

// var cashPay = new Cashpayment(3000);
// console.log(cashPay.paymentDetails());

// let cardPay1 = new CardPayment(40000);
// console.log(cardPay1.paymentDetails());
// let cardPay2 = new CardPayment(100000);
// console.log(cardPay2.paymentDetails());

// let creditPay1 = new CreditCards("ali", "12-12-12", "1234", 200000);
// console.log(creditPay1.PaymentDetails());
// let creditPay2 = new CreditCards("Bilal", "12-12-12", "1234", 200000);
// console.log(creditPay1.PaymentDetails());

// TASK # 05

// class Employee{
//     #Salary;
//     #NumberOfHoursPerDay;

//     constructor(salary, NumberOfHours) {
//         this.#Salary=salary;
//         this.#NumberOfHoursPerDay=NumberOfHours;
//     }
//     setSalary(salary){
//         this.#Salary=salary;
//     }
//     getSalary(){
//         return this.#Salary;
//     }
//     setNumberOfHours(hours){
//         this.#NumberOfHoursPerDay=hours;
//     }
//     getNumberOfHours(){
//         return this.#NumberOfHoursPerDay;
//     }

//     getInfo(){
//         return `salary: ${this.#Salary} and hours per day: ${this.#NumberOfHoursPerDay}`;
//     }
//     addSalary(){
//         if(this.#Salary < 500){
//             return `added 10$ to your salary: now ${this.#Salary+=10}$`
//         } else {
//             return `your salary is not less than 500$`
//         }
//     }
//     addWork(){
//         if(this.#NumberOfHoursPerDay > 6){
//             return `added 5$ to salary, now ${this.#Salary+=5}$`
//         } else {
//             return `your working hours are not greater than 6`
//         }
//     }
// }

// let e1 = new Employee(300, 7);
// console.log(e1.getInfo());
// console.log(e1.addSalary());
// console.log(e1.addWork());


// TASK # 6

// class Game{
//     Info(){
//         return `I love Game and Sports`;
//     }
// }

// class Cricket extends Game{
//     Info(){
//         return `I love Cricket`;
//     }
// }
// class FootBall extends Game{
//     Info(){
//         return `I love FootBall`;
//     }
// }

// let g1 = new Game;
// console.log(g1.Info());
// let g2 = new Cricket;
// console.log(g2.Info());
// let g3 = new FootBall;
// console.log(g3.Info());

// TASK # 7

class Car{
    setName(){}
    setMake(){}
    setColor(){}
    setSpeed(){}  
    print(){}
} 