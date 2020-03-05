module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const open = bracketsConfig.map(([bracket]) => bracket);
  const closed = bracketsConfig.map(([, bracket]) => bracket);

  for (let i = 0; i < str.length; i++) {
      const symbol = str[i];
      const lastInStack = stack[stack.length - 1];
      if (open.includes(symbol)) {
          if (closed.includes(symbol)) {
              symbol === lastInStack ? stack.pop() : stack.push(symbol);
              continue
          }
          stack.push(symbol);
          continue
      }
      if (closed.includes(symbol)) {
          const closeIndex = closed.indexOf(symbol);
          open.indexOf(lastInStack) === closeIndex ? stack.pop() : stack.push(symbol)
      }

  }
  return stack.length === 0;
};
