// Singleton is creational design pattern where we restrict number of instance of a particular object
// in Node js if we create a class and exports default new ClassName() then it creates a singlton class

const SingleTon = (function () {
  class Process {
    constructor(config) {
      this.config = config;
    }
  }

  let processInstance;

  const createProcess = (config) => {
    if (!processInstance) {
      processInstance = new Process(config);
    }
    return processInstance;
  };

  return { createProcess };
})();

let processA = SingleTon.createProcess();
let processB = SingleTon.createProcess();

console.log(processA === processB);
