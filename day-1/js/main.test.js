const {greeter} =  require('./main');
describe("Bolu or Odun", () => {
  it("should return welcome back Bolu", () => {
    expect(greeter("Bolu")).toBe("Welcome back, Bolu");
  });
  it("should return welcome back Odun", () => {
    expect(greeter("Odun")).toBe("Welcome back, Odun");
  });
  it("should return It is nice to meet you, Litmus", () => {
    expect(greeter("Litmus")).toBe("It is nice to meet you, Litmus");
  });
    it("should return Please remove all spaces and special characters from your name", () => {
    expect(greeter("Litmus Test")).toBe("Please remove all spaces and special characters from your name");
  });
});