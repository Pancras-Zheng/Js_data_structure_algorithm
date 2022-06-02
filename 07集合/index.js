import Set from "./set.js";

const set = new Set();
console.log('--------集合---------');
set.add(1);
console.log(set.values()); // 输出[1] 
console.log(set.has(1)); // 输出 true 
console.log(set.size()); // 输出 1
set.add(2);
console.log('set.values(): ', set.values()); // 输出[1, 2]
console.log('set.toString(): ', set.toString());
console.log(set.has(2)); // 输出 true 
console.log(set.size()); // 输出 2
set.delete(1);
console.log(set.values()); // 输出[2] 
set.delete(2);
console.log(set.values()); // 输出[]

console.log('集合运算：');
console.log('--------并集---------');
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
const unionAB = setA.union(setB);
console.log(unionAB.values()); // [1, 2, 3, 4, 5, 6]

console.log('--------交集---------');
const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values()); //[3]

console.log('--------差集---------');
const differenceAB = setA.difference(setB);
console.log(differenceAB.values()); // [1, 2]
const differenceBA = setB.difference(setA);
console.log(differenceBA.values()); // [4, 5, 6]

console.log('--------子集---------');
const setA1 = new Set();
setA.add(1);
setA.add(2);
const setB1 = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA1.isSubsetOf(setB1));
console.log(setA1.isSubsetOf(setC));