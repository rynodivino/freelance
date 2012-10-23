// Exercise
var fibanacci = function (x) {
    var fib = [0,1],//Assuming Fn=0,Fn=1, these are the 2 previous for first number
        i=0,
        n1,
        n2,
        val;

    if (typeof x == 'number') {

        while ( i <= x) {
                n1 = i-1;
                n2 = i-2;
            if (n1 >= 0 && n2 >= 0 ) {
                val = fib[n1] + fib[n2]
                fib[i]=val;
            }
            i++;
        }
    }
    console.log(fib);
};
fibanacci(12);
