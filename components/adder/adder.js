const add = (x, y, z) => { return x + y +z }

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'Emmett',
    firstNumber: 5,
    secondNumber: 3,
    thirdNumber: 2
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber);
      const j = parseInt(this.secondNumber);
      const a = parseInt(this.thirdNumber);
      // guest is an instance variable of this object - use this.
      // add is a local function - do NOT use this. :)
      return `${this.guest}, your sum is ${add(i,j,a)}.`
    }
  }
})