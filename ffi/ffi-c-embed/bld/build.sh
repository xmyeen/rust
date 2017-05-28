#gcc -O2 -Wall -I../inc -c ../src/main.c -o main.o
#gcc -o ../bin/embed main.o -L../lib -lembed -Wl,-rpath,../lib
make
rm -rf temp
../bin/embed
