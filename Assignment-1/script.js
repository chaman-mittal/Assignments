// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  let max=array[0],secondLarge=array[1],i;
  for(i=1;i<=array.length;i++)
    {
      if(max<array[i])
        {
          secondLarge=max;
          max=array[i];
        }
       if(array[i]<max && secondLarge<array[i])
       {
          secondLarge=array[i];
       }  
    }
  return secondLarge;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    var frequency = {};
    for (var i=0; i<string.length;i++) {
        var char = string.charAt(i);
        if(char>='a' && char<='z')
          {
            if(frequency[char])
              {
                frequency[char]++;
              }
            else
              {
                frequency[char]=1;
              }
          }
    }
    return frequency;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(ob) {
  var result = {};
    
    for (var i in ob) 
  {            
        if ((typeof ob[i]) == 'object') 
        {
            var flatObject = flatten(ob[i]);
            for (var x in flatObject) 
            {    
                result[i + '.' + x] = flatObject[x];
            }
        } 
    
        else 
    {
            result[i] = ob[i];
        }
    }
    return result;
}


// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(obj) {
    var result = {}, temp, substrings, property, i;
    for (property in obj) {
        substrings = property.split('.');
        temp = result;
        for (i = 0; i < substrings.length - 1; i++) {
            if (!(substrings[i] in temp)) {
                if (isFinite(substrings[i + 1])) { 
                    temp[substrings[i]] = [];      
                } else {
                    temp[substrings[i]] = {};      
                }
            }
            temp = temp[substrings[i]];
        }
        temp[substrings[substrings.length - 1]] = obj[property];
    }
    return result;
}

