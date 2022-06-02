import { Queue } from './queue.js';
import Deque from './deque.js';

const queue = new Queue();
console.log(queue.isEmpty()); // 输出 true
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString()); // John,Jack
queue.enqueue('Camila');
console.log(queue.toString()); // John, Jack, Camila 
console.log(queue.size()); // 输出 3 
console.log(queue.isEmpty()); // 输出 false 
queue.dequeue(); // 移除 John 
queue.dequeue(); // 移除 Jack
console.log(queue.toString()); // Camila

console.log('----------双端队列------------');
const deque = new Deque();
console.log(deque.isEmpty()); // 输出 true 
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John, Jack 
deque.addBack('Camila');
console.log(deque.toString()); // John, Jack, Camila 
console.log(deque.size()); // 输出 3 
console.log(deque.isEmpty()); // 输出 false 
deque.removeFront(); // 移除 John
console.log(deque.toString()); // Jack, Camila 
deque.removeBack(); // Camila 决定离开 
console.log(deque.toString()); // Jack 
deque.addFront('John'); // John 回来询问一些信息 
console.log(deque.toString()); // John, Jack