function w2match(str1, str2) {
    return compareRecursive(str1, str2, 0,0);
}

function compareRecursive(str1, str2, ind1, ind2) {
  
  if ((ind1 == str1.length) && (ind2 == str2.length))
    return true;
  
  if ((ind1 == str1.length) && (str2[ind2] == '*'))
    return compareRecursive(str1, str2, ind1, ind2+1);

  if ((ind2 == str2.length) && (str1[ind1] == '*'))
    return compareRecursive(str1, str2, ind1+1, ind2);

  if ((ind1 == str1.length) || (ind2 == str2.length))
    return false;

  if (str1[ind1] == '*') {
    if (compareRecursive(str1, str2, ind1, ind2+1))
      return true;
    if (compareRecursive(str1, str2, ind1+1, ind2))
      return true;
  }

  if (str2[ind2] == '*') {
    if (compareRecursive(str1, str2, ind1+1, ind2))
      return true;
    if (compareRecursive(str1, str2, ind1, ind2+1))
      return true;
  }

  if ((str1[ind1] == str2[ind2]) || (str1[ind1] == '?') || (str2[ind2] == '?'))
    return compareRecursive(str1, str2, ind1+1, ind2+1);

  return false;
}

module.exports = {w2match};