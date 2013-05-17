.PHONY: all test clean
all:

test:
	mocha test/tests.js -R spec

clean:
