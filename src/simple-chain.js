const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length;
  },

  addLink(value) {
      this.chain.push(`( ${value} )`);
      return this;
  },

  removeLink(position) {
      if (position > this.getLength() || position < 0 || typeof(position) != 'number') {
          throw Error();
      }
      this.chain.splice(position - 1, 1);
      return this;
  },

  reverseChain() {
      this.chain.reverse();
      return this;
  },

  finishChain() {
      let result = this.chain.join('~~');
      this.chain.splice(0, this.chain.length);
      return result;
  }
};

module.exports = chainMaker;
