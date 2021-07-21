// initial values
let initialState = {
  friends: [
    { id: 1, name: "Inna" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Mira" },
    { id: 4, name: "Kolya" },
    { id: 5, name: "Nastya" },
    { id: 6, name: "Lena" },
  ],
};

// reducer
const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
