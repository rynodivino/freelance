// My solution to the common fizzbuzz question
// Counting to 100, if number is a multiple of 3, print the word "Fizz".  If multiple of 5, print the word "Buzz".  Multiple of both 3 and 5, print "FizzBuzz".
// For all other cases, print the current number

    for(var i=1; i<=100; i++){
        var out='';
        
        if(i%3==0)
            out = 'Fizz';
        
        if(i%5==0)
            out += 'Buzz';
        
        out = (out.length==0)? i : out;
        
        console.log(out);
    }
