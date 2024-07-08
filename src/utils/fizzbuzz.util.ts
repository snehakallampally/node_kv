export class FizzBuzz {
  public fizzbuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
      return "FizzBuzz";
    }
    if (num % 3 == 0) {
      return "Fizz";
    }
    if (num % 5 == 0) {
      return "buzz";
    } else {
      return num;
    }
  }
}
const fizz = new FizzBuzz();
for (let i = 0; i < 20; i++) {
  console.log(fizz.fizzbuzz(i));
}
