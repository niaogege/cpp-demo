/*
 * @Author: Chendapeng
 * @Date: 2022-03-11 16:38:54
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-03-11 16:38:55
 * @Description: 
 */
console.log("1");
setTimeout(()=>{
    console.log(2)
    Promise.resolve().then(()=>{
        console.log(3);
        process.nextTick(function foo() {
            console.log(4);
        });
    })
})
Promise.resolve().then(()=>{
    console.log(5);    
    setTimeout(()=>{
        console.log(6)
    })
    Promise.resolve().then(()=>{
        console.log(7);
    })
})

process.nextTick(function foo() {
    console.log(8);
    process.nextTick(function foo() {
        console.log(9);
    });
});
console.log("10")