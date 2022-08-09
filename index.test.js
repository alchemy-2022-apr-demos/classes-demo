const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push("fox");
    expect(stack.count).toEqual(1);
  });
  // add more tests here...
});
