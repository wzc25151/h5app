#!/bin/bash
if [ $# -lt 1 ]; then
	cat<<HELP
USAGE: shell command [option]
command:
	clean
	debug
	phone
	pad
	pc

HELP
	exit 0
fi

CMD="$1"

if [[ "$CMD" = "clean" ]]; then
	echo "start to clean files ..."
	rm -rf bin
	exit 0
fi

if [[ "$CMD" = "debug" ]]; then
	echo "start to compile files for debug ..."
	fis3 server clean
	fis3 release
	exit 0
fi

if [[ "$CMD" = "phone" || "$CMD" = "pad" || "$CMD" = "pc" ]]; then
	echo "start to release for $CMD ..."
	VERSION=`cat README`
	COMMIT=`git log -n 1 --format=format:"%h"`
	mkdir bin
	fis3 release $CMD -c -d ./bin
	rm -rf bin/common
	rm -rf bin/$CMD
	mv bin/lib.js bin/$CMD-$VERSION-$COMMIT.js
	mv bin/lib.css bin/$CMD-$VERSION-$COMMIT.css
	exit 0
fi

echo "-shell: command not found: $CMD"