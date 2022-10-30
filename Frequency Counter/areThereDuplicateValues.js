let c = console.log;

const areThereDuplicateValues = (...args) => {
  let lookup = {};

  for (let item of args) {
    if (lookup[item]) return true;
    else lookup[item] = 1;
  }
  return false;
};

c(areThereDuplicateValues("a", "b", "c", "d"));
