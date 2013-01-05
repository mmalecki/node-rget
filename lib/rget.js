module.exports = function rget(obj, name, separator) {
  separator || (separator = '.');
  name.split(separator).forEach(function (property) {
    var num = parseInt(property, 10);

    if (!Number.isNaN(num)) {
      property = num;
    }

    obj = obj[property];
  });
  return obj;
};

//
// why? because modulify everything, that's why.
//

