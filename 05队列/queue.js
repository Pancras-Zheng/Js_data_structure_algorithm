export class Queue {
    constructor() {
        this.count = 0; // {1} 
        this.lowestCount = 0; // {2} 
        this.items = {}; // {3}
    }
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount]; // {1} 暂存队列头部的值
        delete this.items[this.lowestCount]; // {2} 
        this.lowestCount++; // {3} 
        return result; // {4}
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    size() {
        return this.count - this.lowestCount;
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        // 在 Stack 类中，我们从索引值为 0开始迭代 items 中的值。
        // 由于 Queue 类中的第一个索引值不一定是 0，需要从索引值为 lowestCount 的位置开始迭代队列
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}