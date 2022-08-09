const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push("fox");
    expect(stack.count).toBe(1);
  });

  it("#peek should return the top item on the stack", () => {
    const stack = new Stack();
    stack.push([1, 2]);
    stack.push([2, 3]);
    expect(stack.peek()).toEqual([2, 3]);
  });

  it("#pop should return the top item on the stack", () => {
    const stack = new Stack();
    stack.push("fox");
    stack.push("goose");
    stack.push("lizard");
    const item = stack.pop();
    expect(item).toBe("lizard");
    expect(stack.count).toBe(2);
  });
  // add more tests here...
});
