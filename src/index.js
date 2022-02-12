module.exports = function toReadable (number) {

    function toRead (number) {
  
        let units=["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
            tens=["", "", "twenty","thirty","forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
      if (number <20) return units[number];
    
      if (number > 999999) return toRead (Math.trunc(number/1000000)) + 
      ' million ' + toRead (number%1000000);
      
      if (number > 999) return toRead (Math.trunc(number/1000)) + 
      ' thousand ' + toRead (number%1000);
    
      if (number > 99) return toRead(Math.trunc(number/100)) + 
      ' hundred ' + toRead(number%100);
    
     return  tens[Math.trunc(number/10)] + " "+toRead(number%10); 
    }
    return ((number==0) ? "zero": toRead (number).replace(/\s\s/g, ' ').trim());

}
