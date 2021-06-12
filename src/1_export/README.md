## export.cc
    
    emcc export.cc -o a.html


打开a.html控制台

        Module._show_me_the_answer(10)
        Module._add(1,2)

EM_PORT_API宏

        1. __EMSCRIPTEN__宏用于探测是否是Emscripten环境
        2. __cplusplus用于探测是否是C++环境
        3. EMSCRIPTEN_KEEPALIVE是Emscripten特有的宏，用于告知编译器后续函数在优化时必须保留，
            并且该函数将被导出至JavaScript环境。

        使用EM_PORT_API定义函数声明：
            EM_PORT_API(int) Func(int param);
        
        在Emscripten中，上述函数声明最终将被展开
            #include <emscripten.h>
            extern "C" int EMSCRIPTEN_KEEPALIVE Func(int param);

