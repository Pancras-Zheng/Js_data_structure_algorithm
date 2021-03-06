import { defaultToString } from '../06链表/util.js';
import { ValuePair } from '../models/value-pair.js';
import LinkedList from '../06链表/linkedList.js';

export default class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position] == null) { //验证要加入新元素的位置是否已经被占据
                this.table[position] = new LinkedList(); //在该位置上初始化一个 LinkedList 类的实例
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }

    get(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    remove(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) {
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        let count = 0;
        Object.values(this.table).forEach(linkedList => {
            count += linkedList.size();
        });
        return count;
    }

    clear() {
        this.table = {};
    }

    getTable() {
        return this.table;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString}, \n{${keys[i]} => ${this.table[
                keys[i]
            ].toString()
                }
    }`;
        }
        return objString;
    }
}