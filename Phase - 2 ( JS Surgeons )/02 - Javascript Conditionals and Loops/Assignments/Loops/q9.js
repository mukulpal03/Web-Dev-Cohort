// print the pattern

/*    *  
     ***  
    ***** 
   *******
    *****
     ***
      *
*/

function shinyDiamondRug (n) {
    let pattern = ''
    for(let i = 1; i <= n; i++) {
        for(let k = 1; k <= n - i; k++) {
            pattern += ' '
        }
        for(let j = 1; j <= (2 * i - 1); j++) {
            pattern += "*"
        }
        pattern += '\n'
    }

    for(let i = n - 1; i >= 1; i--) {
        for(let j = 1; j <= n - i; j++) {
            pattern += ' '
        }
        for(let k = 1; k <= (2 * i - 1); k++) {
            pattern += '*'
        }
        pattern += '\n'
    }
    return pattern;
}

console.log(shinyDiamondRug(4));
