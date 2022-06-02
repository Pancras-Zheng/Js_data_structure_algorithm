import { Stack } from '../02栈/stack.js';

// Decimal --> Binary
function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) { // {1}
        rem = Math.floor(number % 2); // {2} 
        remStack.push(rem); // {3}
        number = Math.floor(number / 2); // {4} 
    }
    while (!remStack.isEmpty()) { // {5} 
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

function baseConverter(decNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {6} 
    let number = decNumber;
    let rem;
    let baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; // {7} 
    }
    return baseString;
}


let a = decimalToBinary(120);
let b = baseConverter(120, 8);
console.log(a);
console.log(b);
console.log(baseConverter(100345, 2)); // 11000011111111001 
console.log(baseConverter(100345, 8)); // 303771 
console.log(baseConverter(100345, 16)); // 187F9 
console.log(baseConverter(100345, 35)); // 2BW0