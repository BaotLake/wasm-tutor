#ifndef EM_PORT_API
#   if defined(__EMSCRIPTEN__)
#       include <emscripten.h>
#       if defined(__cplusplus)
#           define EM_PORT_API(retype) extern "C" retype EMSCRIPTEN_KEEPALIVE
#       else
#           define EM_PORT_API(retype) retype EMSCRIPTEN_KEEPALIVE
#       endif
#   else
#       if defined(__cplusplus)
#           define EM_PORT_API(retype) extern "C" retype
#       else
#           define EM_PORT_API(retype) retype
#       endif
#   endif
#endif

#include <stdio.h>

EM_PORT_API(int) show_me_the_answer() {
    return 42;
}

EM_PORT_API(float) add(float a, float b) {
    return a + b;
}
