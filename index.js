function sumFibonacci(n) {
    if (n <= 0 || !Number.isInteger(n)) {
      return 0;
    }
    let sum = 0;
    let prev = 0;
    let curr = 1;
    for (let i = 1; i <= n; i++) {
      sum += prev; 
      let next = prev + curr;
      prev = curr;
      curr = next;
    }
    return sum;
  }  
console.log(sumFibonacci(1)); // 0 (только первое число Фибоначчи)
console.log(sumFibonacci(2)); // 1 (0 + 1)
console.log(sumFibonacci(3)); // 2 (0 + 1 + 1)
console.log(sumFibonacci(4)); // 4 (0 + 1 + 1 + 2)
console.log(sumFibonacci(5)); // 7 (0 + 1 + 1 + 2 + 3)
console.log(sumFibonacci(-1)); // 0
console.log(sumFibonacci('abc')); // 0
