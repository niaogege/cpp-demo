// ts 类型编程的：

// 简单

// 如何用类型编程拿到 Promise<Value> 中的 Value 类型？（不能用内置高级类型）

// 中等

// 如何用类型编程拿到 Promise<Promise<Value>> （层数不确定） 中的 Value 类型？（不能用内置高级类型）

// 难

// 如何实现 curring 函数的类型定义

// declare function currying(fn: xxx): yyy;

// 如果参数为 (a: string, b: number, c: boolean) => {};
// 那么返回值的类型为(a: string) => (b: number) => (c: boolean) => void


// 很难

// 如何用类型编程实现 querystring （例如 a=1&b=2&c=3）的 parse？


// babel 插件的：

// 简单

// babel 的 plugin 和 preset 的区别是什么？

// 中等

// 如何用 babel 插件实现函数插桩？

// 难

// 如何用 babel 插件实现 eslint 的功能？

// 很难

// 如何用 babel 插件实现 tsc 的类型检查？