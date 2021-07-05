import authReducer, { setAuthUserData, setMessages } from "./auth-reduser";

describe("auth-reducer", () => {
  let state = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    messages: [],
  };
  test("user data should be added", () => {
    let action = setAuthUserData(1, "x@x.ru", "xsmirx", true);
    expect(authReducer(state, action)).toHaveProperty("id", 1);
    expect(authReducer(state, action)).toHaveProperty("email", "x@x.ru");
    expect(authReducer(state, action)).toHaveProperty("login", "xsmirx");
    expect(authReducer(state, action)).toHaveProperty("isAuth", true);
    expect(authReducer(state, action)).toHaveProperty("messages", []);
  });
  test("sessages should be added on array", () => {
    let action = setMessages(["Authentication ERROR"]);
    expect(authReducer(state, action)).toHaveProperty("id", null);
    expect(authReducer(state, action)).toHaveProperty("email", null);
    expect(authReducer(state, action)).toHaveProperty("login", null);
    expect(authReducer(state, action)).toHaveProperty("isAuth", false);
    expect(authReducer(state, action)).toHaveProperty("messages", [
      "Authentication ERROR",
    ]);
  });
});
