import LinkedList from './linkedList.js';
import DoublyLinkedList from './doublyLinkedList.js';

const list = new LinkedList();
console.log('----------链表----------');
list.push(15);
list.push(10);
console.log(list.head);

console.log('----------双向链表----------');
const dLL = new DoublyLinkedList();
dLL.push(2022);
dLL.push(5.31);
console.log(dLL.head);
console.log(dLL.tail);
console.log(dLL.size());

dLL.insert(13, 1);
console.log(dLL.toString());
console.log(dLL.indexOf(13));
console.log(dLL.inverseToString());
console.log(dLL.size());

console.log('----------循环链表----------');