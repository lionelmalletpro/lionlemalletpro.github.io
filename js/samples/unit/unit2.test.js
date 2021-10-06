import { getAge } from "./unit2";

describe("getAge", () => {
  it("should return phrase", () => {
    expect(getAge("16")).toBe("Vous avez 16 ans");
  });
});
