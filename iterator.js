//Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation
const list = [1, "souvik", true, { name: "test", age: 23 }, 2.23, 4n];

function Iterator(list) {
  this.index = 0;
  this.data = list;
}

Iterator.prototype = {
  hasNext() {
    return this.index < this.data.length;
  },
  next() {
    return this.data[this.index++];
  },
};

let it = new Iterator(list);

while (it.hasNext()) {
  console.log(it.next());
}
