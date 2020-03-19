const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 if(typeof sampleActivity != 'string' || isNaN(parseFloat(sampleActivity))===true || parseFloat(sampleActivity) === NaN || parseFloat(sampleActivity)<=0 || parseFloat(sampleActivity)>15){
  return false;
 }else{
  return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))*HALF_LIFE_PERIOD/0.693);
 }
  
};
