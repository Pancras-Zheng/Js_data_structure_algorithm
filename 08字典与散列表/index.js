import Dictionary from "./dictionary.js";
import HashTable from "./hashTable.js";

console.log('\n--------使用Dictionary类---------');
const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.hasKey('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));
console.log(dictionary.keyValues());

console.log('\n--------使用HashTable类---------');
const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');

console.log(hash.get('Gandalf')); // gandalf@email.com 
console.log(hash.get('Loiane')); // undefined

hash.remove('Gandalf');
console.log(hash.get('Gandalf')); // undefined

console.log('\n---------散列表中的冲突-----------');
const hashc = new HashTable();
hashc.put('Ygritte', 'ygritte@email.com');
hashc.put('Jonathan', 'jonathan@email.com');
hashc.put('Jamie', 'jamie@email.com');
hashc.put('Jack', 'jack@email.com');
hashc.put('Jasmine', 'jasmine@email.com');
hashc.put('Jake', 'jake@email.com');
hashc.put('Nathan', 'nathan@email.com');
hashc.put('Athelstan', 'athelstan@email.com');
hashc.put('Sue', 'sue@email.com');
hashc.put('Aethelwulf', 'aethelwulf@email.com');
hashc.put('Sargeras', 'sargeras@email.com');
console.log(hashc.toString())

console.log('\n---------处理冲突-----------');