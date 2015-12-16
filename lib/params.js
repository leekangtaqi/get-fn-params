module.exports = function getParams(fn){
    if(typeof fn != 'function') throw new Error('Failed to get Param on ' + typeof fn);
    var argO = fn.toString().match(/\(.*\)/).toString();
    if(argO.length<=2) return null;
    var argArr = argO.substr(1, argO.length-2).split(',');
    return argArr.map(function(a){
        return a.trim();
    });
};