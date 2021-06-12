function test() {
    let ptr = Module._get_string()
    let str = Module.UTF8ToString(ptr)
    console.log(typeof str)
    console.log(str)
}

setTimeout(test, 1000)

function test2() {
    let ptr = Module.allocateUTF8('这是一串定义于Javascript中的字符串。')
    Module._print_string(ptr)
    Module._free(ptr)
}

setTimeout(test2, 1500)
