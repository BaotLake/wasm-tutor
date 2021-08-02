metadata.c 编译命令

`gcc metadata.c -lavformat -lavcodec -lavutil`

`em++ metadata.c -I/usr/lib -I/usr/include -I/usr/include/x86_64-linux-gnu/ -L/usr/include/x86_64-linux-gnu/libavformat -L/usr/include/x86_64-linux-gnu/libavcodec -L/usr/include/x86_64-linux-gnu/libavutil -s ERROR_ON_UNDEFINED_SYMBOLS=0`

# Apple m1
gcc metadata.c -I../../FFmpeg-n4.4