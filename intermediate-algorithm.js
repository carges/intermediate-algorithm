function diffArray(arr1, arr2) {
  var newArr = [];
  var indices = [];
  var arr = arr1.concat(arr2);
  var k = 0;
  var element = 0;
  var idx = 0;
  // Same, same; but different.
  for (i=0; i<arr.length; i++) {
    indices = [];
  	element = arr[i];
  	idx = arr.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = arr.indexOf(element, idx + 1);
    }
    if (indices.length === 1) {
    	newArr[k] = element;
      k++;
    }
  }
  return newArr;
}

function convertToRoman(num) {

   var roman = [];
   var numStr = num.toString();
   var numArr = numStr.split("");
   var numLength = numStr.length;

   function conv(numb, prevSymbol, currentSymbol, nextSymbol) {
   	if (numb < 5) {
         var diff = 5 - numb;
         if (diff === 1) {
           roman.push(currentSymbol + prevSymbol);
         } else {
             for (i=0; i<numb; i++) {
               roman.push(currentSymbol);
             }
           }
       } else if (numb <= 8) {
           roman.push(prevSymbol);
           if (numb > 5) {
               var diff = numb - 5;
               for (i=0; i<diff; i++) {
                 roman.push(currentSymbol);
               }
           }
         } else if (numb === 9) {
               roman.push(currentSymbol + nextSymbol);
           }
      return roman;
   }

   switch (numLength) {
     case 1:
       conv(num, "V", "I", "X");
       break;
     case 2:
       conv(Number(numArr[0]), "L", "X","C");
       conv(Number(numArr[1]), "V", "I", "X");
     	break;
     case 3:
       conv(Number(numArr[0]), "D", "C","M");
       conv(Number(numArr[1]), "L", "X","C");
       conv(Number(numArr[2]), "V", "I", "X");
     	break;
     case 4:
       conv(Number(numArr[0]), "V|", "M","X|");
       conv(Number(numArr[1]), "D", "C","M");
       conv(Number(numArr[2]), "L", "X","C");
       conv(Number(numArr[3]), "V", "I", "X");
     	break;
   }
  var romanStr = roman.join("");
  return romanStr;
}

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (i=0; i<collection.length; i++) {
  	var collectionKeys = Object.keys(collection[i]);
    var sourceKeys = Object.keys(source);
    for (k=0; k<sourceKeys.length; k++) {
    	if (collection[i].hasOwnProperty(sourceKeys[k])) {
      	if (source[sourceKeys[k]] === collection[i][sourceKeys[k]]) {
        	if (k===sourceKeys.length-1) {
    				arr.push(collection[i]);
          }
        }
      }
    }
  }
  // Only change code above this line
  return arr;
}

function myReplace(str, before, after) {
  var patt1 = /\b[A-Z]/;
  var result = before.match(patt1);
  if (result !== null) {
    var patt2 = /\b[a-z]/gi;
    var toSub = after.match(patt2);
    var toSubStr = toSub.join("");
    after = after.replace(toSub, toSubStr.toUpperCase());
  }
  var re = new RegExp(before, "gi");
  return str.replace(re, after);
}

function translatePigLatin(str) {
  var arr = str.split("");
  var re = /^[aeiou]/i;
  var re2 = /[aeiou]/i;
  if (str.match(re)) {
  	arr.push("way");
  } else {
  	var ind = str.match(re2).index;
    var subStr = str.substr(0, ind);
  	arr.push(subStr);
    for (i=0; i<ind; i++) {
    	arr.shift();
    }
    arr.push("ay");
  }
  str = arr.join("");
  return str;
}

function pairElement(str) {
  var arr = str.split("");
  var resArr = [];
  for (i=0; i<arr.length; i++) {
  	var newArr = [];
  	switch (arr[i]) {
    	case "A":
      	newArr[0] = arr[i];
      	newArr.push("T");
      	break;
      case "T":
      	newArr[0] = arr[i];
      	newArr.push("A");
      	break;
      case "C":
      	newArr[0] = arr[i];
      	newArr.push("G");
      	break;
      case "G":
      	newArr[0] = arr[i];
      	newArr.push("C");
      	break;
    }
   	resArr.push(newArr);
  }
  return resArr;
}

function fearNotLetter(str) {
  var arr = str.split("");
  var ind = [];
  var strChar = [];
  var k = 0;
  for (i=0; i<arr.length; i++) {
  	if (i === 0) {
    	ind[0] = str.charCodeAt(0);
  		k = ind[0];
  		k++;
  		strChar[0] = String.fromCharCode(ind[0]);
    } else {
    	strChar[i] = String.fromCharCode(k);
    	k++;
    }
    if (arr[i] !== strChar[i]) {
    	var strRes = strChar[i];
        return strRes;
  	}
  }
}

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if ((bool === true) || (bool === false)) {
    return true;
  } else {
      return false;
  }
}

function uniteUnique(arr) {
  var res = [];
  var inputArr = [];
  var k = 0;
  for (i=0; i<arguments.length; i++) {
  	inputArr.push(arguments[i]);
  }
  var concatArr = inputArr.reduce(function(a, b) {
    	return a.concat(b);
    }, []);
  for (i=0; i<concatArr.length; i++) {
  	if (res.includes(concatArr[i]) === false) {
    	res[k] = concatArr[i];
      k++;
    }
  }
  return res;
}

function convertHTML(str) {
  // &colon;&rpar;
  var re = /[&<>"']/gi;
  var found = "";
  var newStr = "";
  var arr = str.split("");

  if (str.match(re) === null) {
    return str;
  }

  for (i=0; i<arr.length; i++) {
  	found = arr[i].match(re);
  	if (found !== null) {
    	switch (found[0]) {
        case "&":
          newStr = str.replace(/&/, "&amp;");
          str = newStr;
          break;
        case "<":
          newStr = str.replace(/</, "&lt;");
          str = newStr;
          break;
        case ">":
          newStr = str.replace(/>/, "&gt;");
          str = newStr;
          break;
        case '"':
          newStr = str.replace(/"/, "&quot;");
          str = newStr;
          break;
        case "'":
          newStr = str.replace(/'/, "&apos;");
          str = newStr;
          break;
  		}
    }
  }
  return newStr;
}

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var arr = str.split("");
  for (i=0; i<arr.length; i++) {
  	var found = arr[i].match(/[-,_\s]/);
  	if (found !== null) {
      arr[i] = "-";
    }
    if ((arr[i] === arr[i].toUpperCase()) && (arr[i].match(/[A-Z]/g) !== null)) {
    	if (i === 0) {
      	arr[i] = arr[i].toLowerCase();
      } else {
      	if (arr[i-1] !== "-") {
    			arr[i] = "-" + arr[i].toLowerCase();
        } else
  	  			arr[i] = arr[i].toLowerCase();
      }
    }
  }
  str = arr.join("");
  return str;
}

function sumFibs(num) {
  var arr = [1, 1];
  var i = 2;
  var sum = 2;
  while (arr[i-1] < num) {
  	arr.push(arr[i-1] + arr[i-2]);
    if (arr[i] > num) {
    	arr.pop(arr[i]);
    }
    if (arr[i]%2 === 1) {
    	sum += arr[i];
    }
    i++;
  }
  return sum;
}

function sumPrimes(num) {
  var list = [];
  var primes = [];
  var sum = 0;
  for (i=0; i<num+1; i++) {
  	list[i] = i;
    primes[i] = true;
  }
  var sq = Math.floor(Math.sqrt(num));
  for (i=2; i<=sq; i++) {
  	if (primes[i]) {
  		var n = 0;
    	for (j=i*i; j<=num; j=i*i+n*i) {
      	primes[j] = false;
      	n++;
      }
    }
  }
  for (i=2; i<list.length; i++) {
  	if (primes[i]) {
    	sum += list[i];
    }
  }
  return sum;
}

function smallestCommons(arr) {
  arr.sort(function(a, b) {
  	return a-b;
  });
  var list = [];
  for (i=arr[0]; i<=arr[1]; i++) {
  	list.push(i);
  }

  function gcd(a, b) {
  	var d = 0;
    while ((a%2 === 0) && (b%2 === 0)) {
    	a = a/2;
    	b = b/2;
        d++;
    }
    while (a !== b) {
    	if (a%2 === 0) {
      	  a = a/2;
        } else if (b%2 === 0) {
      	  b = b/2;
        } else if (a > b) {
      	a = (a - b)/2;
      } else {
        b = (b - a)/2;
      }
    }
    var g = a;
    return g * Math.pow(2, d);
  }

  function lcm(a, b) {
  	return ((Math.abs(a) / gcd(a, b))  * Math.abs(b));
  }

  var multiple = arr[0];
    list.forEach(function(n) {
        multiple = lcm(multiple, n);
    });
  return multiple;
}

function findElement(arr, func) {
  var myArr = arr.filter(func);
  return myArr[0];
}

function dropElements(arr, func) {
  // Drop them elements.
  var found = false;
  while (found === false) {
  	if (func(arr[0]) === false) {
  		arr.shift();
    } else {
    	found = true;
    }
  }
  return arr;
}

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var arrEl = [].concat.apply([], arr);
  for (i=0; i<arrEl.length; i++) {
  	while (Array.isArray(arrEl[i])) {
  		arrEl = [].concat.apply([], arrEl);
  	}
  }
  return arrEl;
}

function binaryAgent(str) {
  var arr = str.split(" ");
  var arrRes = [];
  for (i=0; i<arr.length; i++) {
  	var digit = parseInt(arr[i], 2);
  	arrRes.push(String.fromCharCode(digit));
  }
  str = arrRes.join("");
  return str;
}

function truthCheck(collection, pre) {
  // Is everyone being true?
  var found = true;
  for (i=0; i<collection.length; i++) {
  	if ((collection[i].hasOwnProperty(pre) === false) || (!collection[i][pre])) {
    	found = false;
    }
  }
  return found;
}

function addTogether() {
  var x = arguments[0];
  if (typeof x !== "number") {
  	return undefined;
  }
  if (arguments.length === 2) {
  	if (typeof arguments[1] !== "number") {
  		return undefined;
  	} else
    	return x + arguments[1];
  } else return function(val) {
  		if (typeof val !== "number") {
  			return undefined;
  		} else
      	return x + val;
  	};
}
