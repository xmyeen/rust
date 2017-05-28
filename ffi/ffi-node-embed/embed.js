var ffi = require('ffi');

//var cur_proc  = ffi.Library(null, {"atoi" : [ 'int', ["string"] ] });
//var cparam = ["2"];
//var cret = cur_proc.atoi(cparam[0]);
//console.log( "call '" + typeof(cret) + " atoi(" + typeof(cparam[0]) + ")' = " + cret);


var libembed = ffi.Library(__dirname + '/lib/libembed', {'process': ["void", []] });
libembed.process();

console.log("DONE!");
