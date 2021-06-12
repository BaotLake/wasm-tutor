# 在Javascript中分配内存

Emscripten导出了C的malloc()和free()函数，可以在JavaScript中将大数据块送入C/C++环境（分配内存并装入数据，然后将数据指针传入）,调用C函数进行处理

C/C++没有GC机制，在Javascript中通过malloc()函数分配的内存需要使用free()函数将其释放。


## Compile Command 
`em++ sum.cc -s "EXPORTED_FUNCTIONS=['_malloc', '_free']"`