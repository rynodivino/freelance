function revString (str) {
    var tail = str.length || 0,
        arr = tail > 0? str.split('') : null,
        head = 0,
        // If even number, then 1/2 total == done
        // If odd number, len/2 floor stops at the middle character
        //  example  cat:  len=3.  jumps = 3/2 (1.5) -> floor = 1.  So one swap then done.  cat/ c ->, a, <-t
        jumps =  Math.floor(tail/2),
        temp = '';
        
    for (var i = 0; i < jumps; i++ ) {
        // First time, tail is length, not last index
        // Each additional time just moving down one place
        tail--;
        
        // Do swap
        temp = arr[head];
        arr[head]=arr[tail];
        arr[tail]=temp;
        
        // Starts at correct index of 0,
        // then just moved up one for each iteration
        head++;
        
    }
    return arr.join('');    
}

console.log(revString('catfish'));
console.log(revString('foot'));
