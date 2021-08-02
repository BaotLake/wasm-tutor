



em++ -I/usr/lib -I/usr/include -I/usr/include/x86_64-linux-gnu/ -s LLD_REPORT_UNDEFINED -s WASM=1 -s "EXTRA_EXPORTED_RUNTIME_METHODS=['avformat_open_input','avformat_find_stream_info','av_dump_format','avformat_alloc_output_context2','avformat_new_stream']" -s ERROR_ON_UNDEFINED_SYMBOLS=0 remuxing.c -o remuxing.html