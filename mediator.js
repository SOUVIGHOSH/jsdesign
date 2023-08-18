// Mediator is behavioral design pattern
// The Mediator pattern promotes loose coupling among a group of objects by centralizing their interactions through a mediator object.

function Member(name) {
  this.name = name;
  this.chatRoom = null;
}

Member.prototype = {
  send(receiver, message) {
    this.chatRoom.sendMessage(this, receiver, message);
  },
  receive(from, message) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

function ChatRoom() {
  this.members = {};
}

ChatRoom.prototype = {
  addMember(member) {
    this.members[member.name] = member;
    member.chatRoom = this;
  },
  sendMessage(from, to, message) {
    to.receive(from, message);
  },
};

let Bob = new Member("Bob");
let Adam = new Member("Adam");

let chatRoom1 = new ChatRoom();
chatRoom1.addMember(Bob);
chatRoom1.addMember(Adam);

Bob.send(Adam, "Hey How are you doing!!");
