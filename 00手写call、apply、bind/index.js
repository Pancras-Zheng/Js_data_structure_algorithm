// call()、apply()、bind() 都是用来重定义 this 指向对象的！
/* call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，
call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔;
apply 的所有参数都必须放在一个数组里面传进去;
bind 除了返回是函数以外，它 的参数和 call 一样 */

// call()
Function.prototype.myCall = function(context) {
    // 判断调用对象
    if (typeof this !== "function") {
        throw new Error("Type error");
    }
    // 首先获取参数
    let args = [...arguments].slice(1);
    let result = null;
    // 判断 context 是否传入，如果没有传就设置为 window
    context = context || window;
    // 将被调用的方法设置为 context 的属性
    // this 即为我们要调用的方法
    context.fn = this;
    // 执行要被调用的方法
    result = context.fn(...args);
    // 删除手动增加的属性方法
    delete context.fn;
    // 将执行结果返回
    return result;
};


//  apply()
Function.prototype.myApply = function(context) {
    if (typeof this !== "function") {
        throw new Error("Type error");
    }
    let result = null;
    context = context || window;
    // 与上面代码相比，我们使用 Symbol 来保证属性唯一
    // 也就是保证不会重写用户自己原来定义在 context 中的同名属性
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    // 执行要被调用的方法
    if (arguments[1]) {
        result = context[fnSymbol](...arguments[1]);
    } else {
        result = context[fnSymbol]();
    }
    delete context[fnSymbol];
    return result;
};


//  bind() 返回的是一个函数,必须调用它才会被执行
Function.prototype.myBind = function(context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new Error("Type error");
    }
    // 获取参数
    const args = [...arguments].slice(1)
    const fn = this;
    return function Fn() {
        return fn.apply(
            this instanceof Fn ? this : context,
            // 当前的这个 arguments 是指 Fn 的参数
            args.concat(...arguments)
        );
    };
};


var obj = {
    value: "cookie",
};

function fn(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}

fn.call(obj, '盖伦', 30);
fn.myCall(obj, '赵信', 31)

fn.apply(obj, ['蛮王', 32])
fn.myApply(obj, ['易', 33])

fn.bind(obj, '阿狸', 118)()
fn.myBind(obj, '阿卡丽', 19)()