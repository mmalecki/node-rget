module.exports = function rget(obj, name, separator) {
  separator || (separator = '.');
  name.split(separator).forEach(function (property) {
    obj = obj[property];
  });
  return obj;
};

//
// why? because modulify everything, that's why.
//

