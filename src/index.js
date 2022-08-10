module.exports = function toReadable (number) {
    const numbersmin20 = [
       "zero",
       "one",
       "two",
       "three",
       "four",
       "five",
       "six",
       "seven",
       "eight",
       "nine",
       "ten",
       "eleven",
       "twelve",
       "thirteen",
       "fourteen",	
       "fifteen",
       "sixteen",	
       "seventeen",
       "eighteen",
       "nineteen"
    ]
     const number2 = [
       "twenty",
       "thirty",
       "forty",
       "fifty",
       "sixty",
       "seventy",
       "eighty",
       "ninety"
     ]
   
     if (number < 20) {
       return (numbersmin20[number])
     }else if (number.length = 2 && number < 100 && number%10 != 0) {
       return number2[Math.floor(number/10) - 2]+ " "  + numbersmin20[number%10]
     }else if(number.length = 2 && number < 100 && number%10 === 0) {
       return number2[Math.floor(number/10) - 2]
     }else if(number.length = 3 && number%100 < 20 && number%100 != 0){
       return numbersmin20[Math.floor(number/100)] + " hundred "+ numbersmin20[number%100]
     }else if(number.length = 3 && number%100 >= 20 && number%100 != 0 && number%100%10 != 0){
    return numbersmin20[Math.floor(number/100)] + " hundred " + number2[Math.floor(number%100/10)-2] +" "+ numbersmin20[number%100%10]
     }else if(number.length = 3 && number%100 >= 20 && number%100 != 0 && number%100%10 === 0){
        return numbersmin20[Math.floor(number/100)] + " hundred " + number2[Math.floor(number%100/10)-2]
     }else if(number.length = 3 && number%100 === 0) {
       return numbersmin20[Math.floor(number/100)] + " hundred"
     }
  
  }