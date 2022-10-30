let c = console.log;

const longestCommonPrefix = (strs) => {
  strs = strs.sort((a, b) => a.length - b.length);

  let longest = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let includes = false;

    while (!includes) {
      c(strs[i].substring(0, longest.length - 1), longest);
      if (strs[i].substring(0, longest.length) !== longest) {
        longest = longest.substring(0, longest.length - 1);
      } else {
        includes = true;
      }
    }
  }
  return longest;
};

c(longestCommonPrefix(["flower", "flow", "flight"]));
