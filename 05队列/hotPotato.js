import { Queue } from './queue.js'

// 击鼓传花
function hotPotato(elementsList, num) {
    const queue = new Queue(); // {1} 
    const elimitatedList = []; // 淘汰列表
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]); // {2}
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); // {3} 传花num次
        }
        elimitatedList.push(queue.dequeue()); // {4} 停止时拿到花的加入淘汰列表
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue() // {5} 留下的最后一个是获胜者
    };
}

console.log('----------击鼓传花-----------');
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name}在击鼓传花游戏中被淘汰。`);
});
console.log(`胜利者： ${result.winner}`);