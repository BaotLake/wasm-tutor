function test() {
    let count = 50
    let ptr = Module._malloc(4 * count)

    for (let i = 0; i < count; i++) {
        Module.HEAP32[ptr / 4 + i] = i + 1
    }

    console.log(Module._sum(ptr, count))
    Module._free(ptr)
}

setTimeout(test, 1000)
