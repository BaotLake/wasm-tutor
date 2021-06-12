//

function test(count) {
    let ptr = Module._fibonacci(count)
    if (ptr == 0) return
    let str = ''

    for (let i = 0; i < count; i++) {
        str += Module.HEAP32[(ptr >> 2) + i]
        str += ' '
    }

    console.log(str)
    Module._free_buf(ptr)
}


setTimeout(() => {
    test(10)
}, 1000)
