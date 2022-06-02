import { defaultEquals } from './util.js';
import { Node } from './linked-list-models.js';

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0; //存储链表的元素数量
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    //链表尾部添加元素
    push(element) {
        const node = new Node(element); // {1} 
        let current; // {2}
        if (this.head == null) { // {3} 链表为空时
            this.head = node;
        } else {
            current = this.head; // {4} 链表不为空
            while (current.next != null) { // {5} 获得最后一项 
                current = current.next;
            }
            // 将其 next 赋为新元素，建立链接 
            current.next = node; // {6}
        }
        this.count++; // {7}
    }

    //从链表中移除元素： removeAt/根据元素的值移除元素
    removeAt(index) { // 检查越界值
        if (index >= 0 && index < this.count) { // {1} 
            let current = this.head; // {2}
            // 移除第一项
            if (index === 0) { // {3} 
                this.head = current.next;
            } else {
                let previous; // {4}
                for (let i = 0; i < index; i++) { // {5} 
                    previous = current; // {6}
                    // current 变量总是为对所循环列表的当前元素的引用
                    current = current.next; // {7} 
                }
                // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它 
                previous.next = current.next; // {8}
            }
            this.count--; // {9} 
            return current.element;
        }
        return undefined; // {10} 
    }

    // 循环迭代链表直到目标位置
    getElementAt(index) {
        if (index >= 0 && index <= this.count) { // {1} 需要对传入的 index 参数进行合法性验证
            let current = this.head; // {2}
            for (let i = 0; i < index && current != null; i++) { // {3} 
                current = current.next;
            }
            return current; // {4} 返回index 的引用
        }
        return undefined; // {5} 
    }

    // 插入元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) { // {1} 
            const node = new Node(element);
            if (index === 0) { // 在第一个位置添加 
                const current = this.head;
                node.next = current; // {2} 
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1); // {3} 
                const current = previous.next; // {4} 
                node.next = current; // {5} 
                previous.next = node; // {6}
            }
            this.count++; // 更新链表的长度 
            return true;
        }
        return false; // {7} 
    }

    // 返回元素索引
    indexOf(element) {
        let current = this.head; // {1}
        for (let i = 0; i < this.count && current != null; i++) { // {2} 
            if (this.equalsFn(element, current.element)) { // {3} 
                return i; // {4} 如果当前位置的元素就是我们要找的元素，就返回它的位置
            }
            current = current.next; // {5} 
        }
        return -1; // {6} 
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    size() {
        return this.count;
    }
    isEmpty() {
        return this.size() === 0;
    }
    getHead() {
        return this.head;
    }

    toString() {
        if (this.head == null) { // {1} 
            return '';
        }
        let objString = `${this.head.element}`; // {2} 
        let current = this.head.next; // {3}
        for (let i = 1; i < this.size() && current != null; i++) { // {4} 
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString; // {5} 
    }
}