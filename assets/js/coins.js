/**
  Given a number of cents N, write a function that will return the minimal number of coins whose values will sum up to N.
  (denominations - quarter=25, dime=10, nickel=5, cent=1)
 
  e.g. for 58 the function will return 6 (2 quarters, one nickel and 3 cents)
*/
function coinReturn(n) {
    var denoms = [25,10,5,1],
        remainder = n,
        coins = 0,
        totalCoins = 0,
        i,l;

    for (i = 0,l = denoms.length; i < l; i++) {

        // Number of coins in this (denoms[i]) denomination
        coins += Math.floor(remainder/denoms[i]);

        // Money amount remaining after removing "coins" from total
        remainder = remainder - (coins*denoms[i]);

        // Add "coins" to the total coins we'll use, and reset var to 0
        totalCoins  += coins;
        coins       = 0;
    }

    return totalCoins;
}

