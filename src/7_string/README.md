

emcc string.cc -s "EXPORTED_RUNTIME_METHODS=['UTF8ToString','allocateUTF8']" -s "EXPORTED_FUNCTIONS=['_free', '_malloc']"

