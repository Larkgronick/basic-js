module.exports = function getSeason(date) {  
    if(date == undefined){
      return 'Unable to determine the time of year!';
    }  
    if (isNaN(date.getTime())) {  
      throw new Error;
    }
    if(date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1 ){
      return 'winter'
    }
    if(date.getMonth() >= 2 && date.getMonth() <= 4){
      return 'spring'
    }
    if(date.getMonth() >= 5 && date.getMonth() <= 7){
      return 'summer'
    }
    if(date.getMonth() >= 8 && date.getMonth() <= 10){
      return 'autumn'
    }
  }
