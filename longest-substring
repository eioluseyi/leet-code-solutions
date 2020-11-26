/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var longestSubstring = function(j, q) {
    var longest = 0;
    var longSub = function(s, k) {
        let sa = s.split('');

    //     Count each letter
        let count = {};

    //     Store values in object with keys defined by letters
    //     Check letters that pass the minimum number constraint
        let unpassed = new Set();
        // if
        for (let x = 0; x < sa.length; x++) {
            count[sa[x]] = count[sa[x]] ? count[sa[x]] + 1 : 1;
            if (count[sa[x]] < k) {
                unpassed.add(sa[x]);
            } else {
                unpassed.delete(sa[x]);
            }
        }

    //     Check for consecutives of such letters
    //     Consecutives work if letters are not delimited by unpassed letters
    //     Break string s into consecutives
        let consec = []; // Consecutives
        let contemp = ''; //Temporary consecutives
        for (let x = 0; x < sa.length; x++) {
            if (!unpassed.has(sa[x])) {
                contemp += sa[x];
            } else {
                consec.push(contemp);
                contemp = '';
            }
        }
        if (contemp) { consec.push(contemp); }
        console.log(consec);
    //     Repeat process in each consecutive till the final consecutive remains as the input
    //     if (consec.length === 1)
        if (consec.length > 1) {
            for (let x = 0; x < consec.length; x++) {
                longSub(consec[x], k);
            }
        } else {    
    //     Return the count of the largest consecutive from the list of final consecutives
            if (consec[0] && consec[0].length > longest) {
                longest = consec[0].length;
            }
        }    
        // return consec[0].length
        return longest;
    };
    return longSub(j, q);
};
