import Deque from "./deque.js";

// 回文检查器
function palindromeChecker(aString) {
    if (aString === undefined || aString === null ||
        (aString !== null && aString.length === 0)) { // 检查传入的字符串参数是否合法
        return false;
    }
    const deque = new Deque(); // {2}
    const lowerString = aString.toLocaleLowerCase().split(' ').join(''); // 将所有字母转化为小写，同时移除所有的空格
    let isEqual = true;
    let firstChar, lastChar;
    for (let i = 0; i < lowerString.length; i++) { // 对字符串中的所有字符执行 enqueue 操作 
        deque.addBack(lowerString.charAt(i)); // charAt(i)返回索引处的字符
    }
    //如果所有元素都在双端队列中（如果只有一个字符的话，那它肯定是回文）并且首尾字符相同的话
    while (deque.size() > 1 && isEqual) { // {5} 
        firstChar = deque.removeFront(); // {6} 从前端移除一个元素 
        lastChar = deque.removeBack(); // {7} 再从后端移除一个元素
        if (firstChar !== lastChar) {
            isEqual = false; // {8} 要使字符串为回文，移除的两个字符必须相同
        }
    }
    return isEqual;
}

console.log('----------回文检查器----------');
console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));