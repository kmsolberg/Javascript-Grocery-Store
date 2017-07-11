const data = [
  ['apples', 73],
  ['pears', 12],
  ['oranges', 97],
  ['grapes', 387],
  ['grapes', 88],
  ['pears', 33],
  ['apples', 75],
  ['grapes', 23],
  ['oranges', 86],
  ['kiwis', 201]
];


Array.prototype.countFruit = function(data) {
  return data.sort().reduce(function(acc, fruit) {
    var last;
    if (last) {
      if (last[0] === fruit[0]) {
        last[1] += fruit[1];
        return acc;
      }
    } last = fruit;
      acc.push(fruit);
      return acc;
   }, []);
}();

console.log(countFruit(data));