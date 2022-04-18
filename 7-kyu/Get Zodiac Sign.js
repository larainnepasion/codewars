/* Your task is to get Zodiac Sign using input day and month.

For example:

getZodiacSign(1,5) => 'Taurus'
getZodiacSign(10,10) => 'Libra'
Correct answers are (preloaded):

const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']
P.S. Each argument is correct integer number.

WESTERN ASTROLOGY STAR SIGN DATES

Aries (March 21-April 19)
Taurus (April 20-May 20)
Gemini (May 21-June 20)
Cancer (June 21-July 22)
Leo (July 23-August 22)
Virgo (August 23-September 22)
Libra (September 23-October 22)
Scorpio (October 23-November 21)
Sagittarius (November 22-December 21)
Capricorn (December 22-January 19)
Aquarius (January 20 to February 18)
Pisces (February 19 to March 20) */

const getZodiacSign = (day, month) => {
  
    switch(month) {
      case 1 :
        if(day >= 20) {
          return 'Aquarius'
        }
        else return 'Capricorn';
      break;
        
      case 2 :
        if(day >= 19) {
          return 'Pisces'
        }
        else return 'Aquarius';
      break;
        
      case 3 : 
        if(day >= 21) {
          return 'Aries'
          }
        else return 'Pisces';
      break;
        
      case 4 :
        if(day >= 20) {
          return 'Taurus'
        }
        else return 'Aries';
      break;
        
      case 5 :
        if(day >= 21) {
          return 'Gemini'
        }
        else return 'Taurus';
      break;
        
      case 6 :
        if(day >= 21) {
          return 'Cancer'
        }
        else return 'Gemini';
      break;
        
      case 7 :
        if(day >= 23) {
          return 'Leo'
        }
        else return 'Cancer';
      break;
        
      case 8 :
        if(day >= 23) {
          return 'Virgo'
        }
        else return 'Leo';
      break;
        
      case 9 :
        if(day >= 23) {
          return 'Libra'
        }
        else return 'Virgo';
      break;
        
      case 10 :
        if(day >= 23) {
          return 'Scorpio'
        }
        else return 'Libra';
      break;
        
      case 11 : 
        if(day >= 22) {
          return 'Sagittarius'
        }
        else return 'Scorpio';
      break;
        
      case 12 :
        if(day >= 22) {
          return 'Capricorn'
        }
        else return 'Sagittarius';
      break;   
        
    }
  }