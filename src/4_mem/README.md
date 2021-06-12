# 内存模型

## Module.buffer

C/C++代码中的内存空间实际上对应的都是Emscripten提供的ArrayBuffer对象 `Module.buffer` 。C/C++内存地址与Module.buffer数组下标一一对应。

Emscripten v1.38.11中，指针类型为Int32，因此单一模块的最大可用内存为2GB。为定义的情况下，内存默认容量为16MB，其中栈容量为5MB。

## Module.HEAPX

JavaScript中的ArrayBuffer无法直接访问，必须通过某种类型的TypedArray对其进行读写。

### 示例一： 向ArrayBuffer中写入1111111、2222222、3333333三个int32型数值

```JavaScript
let buf = new ArrayBuffer(12);
let i32 = new Int32Array(buf);
i32[0] = 1111111;
i32[1] = 2222222;
i32[2] = 3333333;
```
Emscripten已经为`Module.buffer`创建了常用类型的TypedArray，如下

### Module.HEAPX对象与数据类型的对应关系

| 对象 | TypedArray | 对应的C数据类型 |
|----------------|--------------|--------|
| Module.HEAP8   | Int8Array    | int8   |
| Module.HEAP16  | Int16Array   | int16  |
| Module.HEAP32  | Int32Array   | int32  |
| Module.HEAPU8  | Uint8Array   | uint8  |
| Module.HEAPU16 | Uint16Array  | uint16 |
| Module.HEAPU32 | Uint32Array  | uint32 |
| Module.HEAPF32 | Float32Array | float  |
| Module.HEAPF64 | Float64Array | double |


JavaScript的 Number 类型为[双精度IEEE 754 64位浮点数](https://en.wikipedia.org/wiki/Floating-point_arithmetic) 类型。Number可以精确地表达32位及以下整形数、32位浮点数、64位浮点数（涵盖了大多数C语言的基础数据类型），这意味着JavaScript与C/C++交互时，不能使用64位整形数作为参数或返回值。

从语言角度来说，JavaScript与C/C++有完全不同的数据体系，number类型是二者唯一的交集。

number数据类型从JavaScript传入C/C++有两种途径：
* JavaScript调用带参数的C导出函数，通过参数传入number
* C调用由JavaScript实现的函数，通过注入函数的返回值传入number

由于C/C++是强类型语言，因此对于来自JavaScript的number传入，会发生隐式类型转换。若目标数据类型位int，将执行向0取整；若目标数据类型为float,类型转换时有可能损失精度。

