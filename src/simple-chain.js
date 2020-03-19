const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value == null ? this.chain.push(null) : this.chain.push(value); 
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position > this.chain.length-1 || position < 1) {
      this.chain = [];
      throw new Error;
    }else{
    this.chain.splice(position-1,1);
    return this;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let final = this.chain.map(el => el = '( ' + el + ' )~~' ).join('').slice(0,-2);
    this.chain = [];
    return final;
   
  }

};
module.exports = chainMaker;
