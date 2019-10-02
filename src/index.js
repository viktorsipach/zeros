module.exports = function zeros(string) {

  const gotOnceArrayNumber = [];
  const gotDoubleArrayNumber = [];
  const resultArray = [];
  const doubleRegex = /\d+\!\!/g;
  const regex =  /\d+/g;
  const testOnDouble =  doubleRegex.test(string);
  const getArray = string.split('*');
  const onlyDoubleFact = string.match(doubleRegex);
  
function isOnceFact(value) {
    return !value.match(doubleRegex);
};

 const onlyOnceFact =  getArray.filter(isOnceFact);
   onlyOnceFact.map(function(element) {
     gotOnceArrayNumber.push(+element.match(regex));
});

   gotOnceArrayNumber.map(function(element) {
      resultArray.push(Math.floor((element/5)) + Math.floor((element/25))); 
})
  if(testOnDouble) {
     onlyDoubleFact.map(function(element) {
        gotDoubleArrayNumber.push(+element.match(regex));
});
  }

  for(let i = 0, lent = gotDoubleArrayNumber.length; i < lent; i++) {
     if (gotDoubleArrayNumber[i]%2 !== 0 && gotDoubleArrayNumber[i] >= 5 && gotDoubleArrayNumber[i] <= 10) {
      resultArray.push(Math.floor(gotDoubleArrayNumber[i]/5));
    } else if (gotDoubleArrayNumber[i] == 50) {
      resultArray.push(9);
      continue;
    }
     else if (gotDoubleArrayNumber[i]%2 == 0) { 
      resultArray.push(Math.floor((gotDoubleArrayNumber[i]/5)/2) + Math.floor((gotDoubleArrayNumber[i]/25)/2));
    }
    else {
      resultArray.push(Math.floor((gotDoubleArrayNumber[i]/5)/2) + Math.floor((gotDoubleArrayNumber[i]/25)));   
   } 
};
         return resultArray.reduce(function(a,b) {
         return a + b;
  });
} 


  
