PROJ_DIR   = ..
TEMP_DIR   = temp

BIN_DIR    = $(PROJ_DIR)/bin
LIB_DIR    = $(PROJ_DIR)/lib
INC_DIR    = $(PROJ_DIR)/inc
SRC_DIR    = $(PROJ_DIR)/src
OBJ_DIR    = $(PROJ_DIR)/obj

INCLUDES   = -I$(PROJ_DIR)/inc
LIBS       = -L$(LIB_DIR) -lembed -lpthread -lc -lm -Wl,-rpath,../lib

CC         =  gcc
LINK       =  gcc -o
MK         =  mkdir -v -p
RM         =  rm -v -r -f
CFLAG      =  -O2 -Wall 

HEADERS    = $(wildcard $(INC_DIR)/*.h)
SOURCES    = $(wildcard $(SRC_DIR)/*.c)
OBJECTS   := $(patsubst $(PROJ_DIR)/%.c, temp/%.o, $(SOURCES))

OBJDIRS    = $(patsubst %.o, %, $(OBJECTS))

TARGET     = $(BIN_DIR)/embed

all : $(TARGET)

$(TARGET) : $(OBJECTS)
	$(CC) $(CFLAG) $^ -o $@ $(LIBS)

$(OBJECTS) : $(SOURCES) $(HEADERS) $(OBJDIRS)
	$(CC) $(CFLAG) -c $(SOURCES) -o $@ $(INCLUDES)

$(OBJDIRS) :
	$(MK) $@

.PHONY : clean
clean:
	$(RM) $(TEMP_DIR)
	$(RM) $(TARGET) 
