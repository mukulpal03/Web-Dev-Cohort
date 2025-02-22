// print the pattern

/*  ****
    ***
    **
    *
*/

function invertedMountain (n) {
    let pattern = ''
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n - i; j++) {
            pattern += '*'
        }
        if(i !== n - 1) {
            pattern += '\n'
        }
    }
    return pattern;
}

console.log(invertedMountain(4));