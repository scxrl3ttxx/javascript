// ამოცანა 1
let age = Number(prompt("ასაკი:"));
let year = Number(prompt("მიმდინარე წელი:"));
let birth = Number(prompt("დაბადების წელი:"));

let realAge = year - birth;

console.log(age);
console.log(year);
console.log(birth);
console.log(realAge);


// ამოცანა 2
let age2 = Number(prompt("ასაკი:"));
let isStudent = confirm("სტუდენტი ხართ?");

let message = (!isNaN(age2) && age2 >= 18 && isStudent) && "ფასდაკლება გეკუთვნით" || "ფასდაკლება არ გეკუთვნით";

console.log(message);

// ამოცანა 3
let amount = Number(prompt("შეიყვანეთ შეკვეთის თანხა:"));
let hasPromo = confirm("გაქვთ პრომოკოდი?");

let discount = 0;

if (!isNaN(amount) && amount > 0) {
  if (amount > 100) {
    if (hasPromo) {
      discount = 20;
    } else {
      discount = 10;
    }
  } else if (amount >= 50 && amount <= 100 && hasPromo) {
    discount = 5;
  }
}

console.log("ფასდაკლება:", discount + "%");


// ამოცანა 4
let age3 = Number(prompt("შეიყვანეთ ასაკი:"));
let experience = Number(prompt("შეიყვანეთ გამოცდილების წლები:"));
let isVip = confirm("გაქვთ VIP სტატუსი?");

if (age3 >= 18) {
  if (experience >= 2) {
    alert("შეგიძლიათ ტურნირში მონაწილეობა.");
  } else {
    alert("შეგიძლიათ მხოლოდ დამწყებთა ტურნირში მონაწილეობა.");
  }
} else if (isVip) {
  alert("შეგიძლიათ სპეციალურ საბავშვო ტურნირში მონაწილეობა.");
} else {
  alert("რეგისტრაცია მიუწვდომელია.");
}


// ამოცანა 5
let num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი:"));
let num2 = Number(prompt("შეიყვანეთ მეორე რიცხვი:"));
let operator = prompt("აირჩიეთ ოპერაცია (+, -, *, /, %):");

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    alert(result);
    console.log(result);
    break;
  case "-":
    result = num1 - num2;
    alert(result);
    console.log(result);
    break;
  case "*":
    result = num1 * num2;
    alert(result);
    console.log(result);
    break;
  case "/":
    if (num2 === 0) {
      alert("ნულზე გაყოფა შეუძლებელია!");
      console.log("ნულზე გაყოფა შეუძლებელია!");
    } else {
      result = num1 / num2;
      alert(result);
      console.log(result);
    }
    break;
  case "%":
    if (num2 === 0) {
      alert("ნულზე გაყოფა შეუძლებელია!");
      console.log("ნულზე გაყოფა შეუძლებელია!");
    } else {
      result = num1 % num2;
      alert(result);
      console.log(result);
    }
    break;
  default:
    alert("არასწორი ოპერაცია!");
    console.log("არასწორი ოპერაცია!");
}

// ამოცანა 6
let age4 = Number(prompt("შეიყვანეთ თქვენი ასაკი:"));

let answer = age4 >= 18 ? "სრულწლოვანი ხართ" : "არასრულწლოვანი ხართ";

alert(answer);