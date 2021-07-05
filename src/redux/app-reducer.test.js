import appReducer, { initializedSuccess } from "./app-reducer";

describe("testing user-reducer", () => {
  test("initialized should be true", () => {
    // 1. test data
    let state = {
      initialized: false,
    };
    let action = initializedSuccess();
    // 2. action
    let newState = appReducer(state.initialized, action);
    // 3. expectation
    expect(newState.initialized).toBe(true);
  });
});
