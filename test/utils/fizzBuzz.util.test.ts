import { beforeEach } from "node:test";
import { FizzBuzz } from "../../src/utils/fizzbuzz.util";


describe("fizzBuzz test", () => {
  let fizzBuzz:FizzBuzz ;
  beforeEach(()=>{
    fizzBuzz=new FizzBuzz();
  });
  it('should return "Fizz" for numebers divisible ny 3', () => {
    
    expect(fizzBuzz.fizzbuzz(3)).toBe("Fizz");
    expect(fizzBuzz.fizzbuzz(3)).toBe("Fizz");
  });
});

