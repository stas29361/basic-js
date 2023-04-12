const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  console.log(date+'*****************************************')
  if(date===undefined){
    return 'Unable to determine the time of year!'
  }
  let newDate = date.toString().slice(4,7)
  if(newDate === 'Dec' || newDate === 'Jan' || newDate === 'Feb'){
    return 'winter'
  }else if(newDate === 'Mar' || newDate === 'Apr' || newDate === 'May'){
    return 'spring'
  }else if(newDate === 'Jun' || newDate === 'Jul' || newDate === 'Aug'){
    return 'summer'
  }else if(newDate === 'Sep' || newDate === 'Oct' || newDate === 'Nov'){
    return 'autumn'
  }
}


module.exports = {
  getSeason
};
