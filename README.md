#wild2wild_matcher

A function to match two wildcard strings to each other.
Supported wild cards:
\* - Zero or more charachters
? - Exactly one character

This is actually a subset of a regular expression partial match. Both of which are not available OOB in JS.

### A use case example:
When only part of the input is available and there is a need to understand whether this input may potentially be completed
to match a desired pattern (described with wildcards) in order to show a notification to the user.
Appending the partial input with * and matching it with the desired pattern will reveal if the input can be completed to match
the pattern.

### Examples:



    const w2match = require('wild2wild_matcher');
    
    w2match('hello\*world', 'hello\*');           // => true
    w2match('hello\*world', 'hello\*jimbo');      // => false
    w2match('h?llo?wor?d', '??llo w?rld');        // => true
    w2match('he??o?world', 'he\*d');              // => true
    w2match('he??o?world', 'helo world\*');       // => false
