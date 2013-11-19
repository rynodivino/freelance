function addUp(z) {
    return function(y) {
        return x + y + z;
        }
    };

x = 3;
var y = addUp(x);
var z = addUp(y(2));

console.log(z(x));
