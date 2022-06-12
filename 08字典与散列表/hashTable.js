import { defaultToString } from '../06链表/util.js';
import { ValuePair } from '../models/value-pair.js';

export default class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    //创建散列函数
    loseloseHashCode(key) {
        if (typeof key === 'number') { // {1} 
            return key;
        }
        const tableKey = this.toStrFn(key); // {2} 
        let hash = 0; // {3} hash 变量来存储总和
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i); // {4}
        }
        return hash % 37; // {5} 使用 hash 值和一个任意数做除法的余数,防止超过数值变量最大表示范围
    }
    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    //将键和值加入散列表
    put(key, value) {
        if (key != null && value != null) { // {1}
            const position = this.hashCode(key); // {2} 
            this.table[position] = new ValuePair(key, value); // {3} 
            return true;
        }
        return false;
    }

    //从散列表中获取一个值
    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    //从散列表中移除一个值
    remove(key) {
        const hash = this.hashCode(key); // {1} 
        const valuePair = this.table[hash]; // {2} 在 hash 的位置获取到 valuePair
        if (valuePair != null) {
            delete this.table[hash]; // {3} 
            return true;
        }
        return false;
    }

    getTable() {
        return this.table;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return Object.keys(this.table).length;
    }

    clear() {
        this.table = {};
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`;
        }
        return objString;
    }
}