// Adapter pattern is a structural design pattern

function LegacyCalculator() {
  this.type = "Legacy";
}

LegacyCalculator.prototype = {
  add(a, b) {
    return a + b;
  },
};

function ModernCalculator(legacy) {
  this.type = "Modern";
  this.calc = legacy;
}

ModernCalculator.prototype = {
  substract(a, b) {
    return this.calc.add(a, -b);
  },
};

function AddNSubstract(a, b) {
  let calc = new LegacyCalculator();
  console.log("Addition result ", calc.add(a, b));
  console.log("Subtrction result ", new ModernCalculator(calc).substract(a, b));
}

AddNSubstract(5, 2);
