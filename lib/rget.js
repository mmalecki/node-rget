module.exports = function rget(obj, name) {
  name.split('.').forEach(function (property) {
    obj = obj[property];
  });
  return obj;
};

//
// why? because modulify everything, that's why.
//

