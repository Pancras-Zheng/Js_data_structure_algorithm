//基于数组 stack类
/* 
class Stack {
    constructor() {
        this.items = []; // 用数组保存栈中的元素；
    }

    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}

const stack = new Stack();
console.log(stack.isEmpty()); // 输出为 true

stack.push(5);
stack.push(8);
console.log(stack.peek()); // 输出 8

stack.push(11);
console.log(stack.size()); // 输出 3
console.log(stack.isEmpty()); // 输出 false

stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); // 输出 2 */

export class Stack {
    constructor() {
            this.count = 0;
            this.items = {};
        }
        // 方法
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    pop() {
        if (this.isEmpty()) { // {1} 
            return undefined;
        }
        this.count--; // {2}
        const result = this.items[this.count]; // {3} 
        delete this.items[this.count]; // {4} 
        return result; // {5}
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    clear() {
            this.items = {};
            this.count = 0;
            /* 
            while (!this.isEmpty()) {
                this.pop();
            } */
        }
        // 在数组版本中，我们不需要关心 toString 方法的实现，因为数据结构可以直接使用数组已经提供的 toString 方法。
        // 对于使用对象的版本，我们将创建一个 toString 方法来像数组一样打印出栈的内容。
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`; // {1} 
        for (let i = 1; i < this.count; i++) { // {2} 
            objString = `${objString},${this.items[i]}`; // {3}
        }
        return objString;
    }

}