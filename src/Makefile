PROG=   spdif-loop

CFLAGS+=        -Wall -std=c99 -g
LDFLAGS+=       -lavcodec -lavformat -lavdevice -lavutil -lao -lm

all: ${PROG}

$(PROG): $(PROG).c
        cc $(CFLAGS) $(PROG).c $(LDFLAGS) -o $(PROG)
clean:
        -rm -f ${PROG}