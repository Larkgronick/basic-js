module.exports = class DepthCalculator {
  calculateDepth(array) {
    let depth = 0;
    if(Array.isArray(array)){
        let currentDepth = [1];   
        for(let i = 0; i < array.length; i++){
          currentDepth.push( this.calculateDepth(array[i]) + 1);
        }
        return Math.max(...currentDepth);
    }
    return depth;
}
};