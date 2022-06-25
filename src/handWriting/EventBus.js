class Events {
  constructor() {
    this.cbs = {}
  }
  // 注册
  on(type, cb) {
    if (!this.cbs[type]) {
      this.cbs[type]= [cb]
    } else {
      this.cbs[type].push(cb)
    }
  }
  // 执行
  emit (type = '', ...rest) {
    let arg = rest || []
    let list = this.cbs[type].slice()
    list.forEach((fn) => fn(...arg))
  }
  // 卸载
  off (type = '', cb) {
    let list = this.cbs[type]
    const index = list.indexOf(cb)
    if (index > -1) {
    list.splice(index, 1)
    }
  }
  // 只执行一次
   once(type, cb) {
     const handler = (...args) => {
      cb(...args)
      this.off(type, handler)
    }
    this.on(type, handler)
  }
}
var fn1 = (...args)=> console.log('I want sleep1', ...args)
var fn2 = (...args)=> console.log('I want sleep2', ...args)
// var fn3 = (...args)=> console.log('I want sleep3', ...args)
var event1 = new Events();
event1.on('sleep', fn1);
event1.on('sleep', fn2);
event1.emit('sleep', 4, 5, 6);
// I want sleep1 1 2 3 4 5 6
// I want sleep2 1 2 3 4 5 6
// event1.off('sleep', fn1);
event1.once('sleep', () => console.log('I want sleep once'));
event1.emit('sleep', 789);

function Test() {
  let sign1 = 0;
  let sign2 = 0;
  const emitter = new Events();
  emitter.on('add', function() {sign1 ++});
  emitter.emit('add');
  emitter.on('add',function() {sign2 ++});
  emitter.emit('add');
  const judge = sign1 === 2 && sign2 === 1;
  return judge
}