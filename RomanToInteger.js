/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
     const roman = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let total = 0;
    for (i = s.length -1 ; i >= 0 ; i--) {
        let current = roman[s[i]];
        let previous = roman[s[i + 1]];
        if (current < previous) {
            total -= current
        } else {
            total += current;
        }
    }
    return total;
};
