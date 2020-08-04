# wild2wild_matcher

A function to match two wildcard strings to each other.<br>
Supported wild cards:<br>
\* - Zero or more characters<br>
? - Exactly one character<br><br>

This is actually a subset of a regular expression partial match. Both of which are not available OOB in JS.<br>

### A use case example:
When only part of the input is available and there is a need to understand whether this input may potentially be completed
to match a desired pattern (described with wildcards) in order to show a notification to the user.<br>
Appending the partial input with * and matching it with the desired pattern will reveal if the input can be completed to match
the pattern.<br>

### Examples:



    const {w2match} = require('wild2wild_matcher');

    console.log(w2match('hello\*world', 'hello\*'));           // => true
    console.log(w2match('hello\*world', 'hello\*jimbo'));      // => false
    console.log(w2match('h?llo?wor?d', '??llo w?rld'));        // => true
    console.log(w2match('he??o?world', 'he\*d'));              // => true
    console.log(w2match('he??o?world', 'helo world\*'));       // => false

### Efficiency
This recursive algorithm is not the most efficient one. A more efficient (but less elegant) algorithm can be written by separating to several cases.
For example, noticing that if there is at least one * in the middle of each string, there is only a need to compare the 
prefixes (before the first *s) and the suffixes (after the last *s). 
Another case is when only one string has *s in the middle. Then there is a need to check each substring delimited by *s for containment in the other string and also check 
the order.
Other cases include when the *s are in the beginning and end of the strings.

