import theme from "./index";

describe("Test theme", () => {
  it("test ellipsis", () => {
    expect(theme.ellipsis(2).trim()).toEqual(
      `
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical`.trim()
    );
  });
});
