//Observer design pattern is a behavioral design pattern
//The Observer pattern is used to establish a one-to-many dependency between objects, where when one object (the subject or observable) changes state, all its dependents (observers) are notified and updated automatically.

function Subject() {
  this.name = "Click";
  this.type = "Event";
  this.observerList = [];
}

Subject.prototype = {
  subscribe(fn) {
    this.observerList.push(fn);
  },
  unsubscribe(fn) {
    this.observerList = this.observerList.filter((a) => a !== fn);
  },
  trigger() {
    this.observerList.forEach((a) => a.call());
  },
};

let clickEvent = new Subject();

let btnFn = () => {
  console.log("btnFn triggered");
};
let scrollFn = () => {
  console.log("scrollFn triggered");
};

clickEvent.subscribe(btnFn);
clickEvent.subscribe(scrollFn);

clickEvent.trigger();
clickEvent.unsubscribe(scrollFn);
clickEvent.trigger();
