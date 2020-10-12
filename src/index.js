module.exports = function toReadable (number) {
    let numberString = number.toString();
    let number0 = '';
    let number1 = 'one';
    let number2 = 'two';
    let number3 = 'three' ;
    let number4 = 'four';
    let number5 = 'five';
    let number6 = 'six' ;
    let number7 = 'seven';
    let number8 = 'eight';
    let number9 = 'nine' ;
    let number10 = 'ten';
    let number11 = 'eleven'; 
    let number12 = 'twelve' ;
    let number13 = 'thirteen';
    let number14 = 'fourteen';
    let number15 = 'fifteen' ;
    let number16 = 'sixteen';
    let number17 = 'seventeen';
    let number18 = 'eighteen' ;
    let number19 = 'nineteen';
    let dozen2 = 'twenty';
    let dozen3 = 'thirty';
    let dozen4 = 'forty';
    let dozen5 = 'fifty';
    let dozen6 = 'sixty';
    let dozen7 = 'seventy';
    let dozen8 = 'eighty';
    let dozen9 = 'ninety';
  
if (number == 0) {
  return 'zero';
};    
  
if (numberString.length == 1) { 
    let i = 'number'+ numberString[0];  
    return eval(i);
 
}
  
  if (numberString.length == 2 && number < 20) { 
    let i = 'number'+ numberString[0] + numberString[1]; 
    return eval(i);
}

if (numberString.length == 2 && number >= 20) { 
    let iFirst = 'dozen' + numberString[0];   
    let iSecond = 'number'+ numberString[1];
   if (number % 10 !== 0) {
   return (eval(iFirst) + ' ' + eval(iSecond));
   }
   else {
     return (eval(iFirst));
   }
}   
  
  if (numberString.length == 3) { 
     
     if (number % 100 == 0)
       {
         let iFirst = 'number' + numberString[0];
         return eval(iFirst) + ' hundred';
       }
     
       let numberEnd = number % 100
       if (numberEnd < 10 && number % 100 != 0) {
        let iSecond = 'number'+ numberString[2];
        let iFirst = 'number' + numberString[0];
       return  (eval(iFirst) + ' hundred ' + eval(iSecond));
      }  
          if (numberEnd < 20 && number % 100 != 0 && numberEnd >= 10) {
        let iSecond = 'number'+ numberString[1] + numberString[2];
        let iFirst = 'number' + numberString[0];
       return (eval(iFirst) + ' hundred ' + eval(iSecond));
      }
 else { 
   let iThird = 'number' + numberString[2]
     let iSecond = 'dozen'+ numberString[1];
     let iFirst = 'number' + numberString[0];
   if (number % 10 !== 0) {
     return (eval(iFirst) + ' hundred ' + eval(iSecond) + ' ' + eval(iThird));  }
   else {
    return (eval(iFirst) + ' hundred ' + eval(iSecond));
   }
}  
}

}
