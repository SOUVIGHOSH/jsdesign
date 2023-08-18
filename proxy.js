// proxy/decorator pattern is a structural design pattern

function cryptoApi(name) {
  console.log("Fetching data from Crypto Api");

  switch (name) {
    case "Bitcoin":
      return "$2500";
      break;
    case "Etherium":
      return "$250";
      break;
    case "Dodgecoin":
      return "$25";
      break;
    default:
      throw new Error("Invalid name");
  }
}
let map = new Map();

function cryptoApiProxy(name) {
  if (!map.has(name)) {
    map.set(name, cryptoApi(name));
  }
  return map.get(name);
}

console.log(cryptoApiProxy("Bitcoin"));
console.log(cryptoApiProxy("Bitcoin"));
