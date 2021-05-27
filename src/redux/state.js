const ADD_POST = "ADD-POST";
const UPDATE_TEXT_AREA_POST = "UPDATE-TEXT-AREA-POST";

export let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Inna",
          lastMessege: "Lorem ipsum dolor sit amet.",
          timeLastMessege: "10:50",
        },
        {
          id: 2,
          name: "Sonya",
          lastMessege:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          timeLastMessege: "09:45",
        },
        {
          id: 3,
          name: "Nastya",
          lastMessege:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima...",
          timeLastMessege: "yesterday",
        },
        {
          id: 4,
          name: "Lena",
          lastMessege: "Lorem ipsum dolor.",
          timeLastMessege: "yesterday",
        },
        {
          id: 5,
          name: "Tasya",
          lastMessege: "Lorem ipsum.",
          timeLastMessege: "21.05.2021 21:56",
        },
      ],
      chat: [
        { id: 1, message: "Hi", fromMe: true },
        { id: 2, message: "How are you?", fromMe: false },
        {
          id: 3,
          message:
            "I'm learning English now)) dhkgj jshhdg jashg jhgajsdh jhgasdvjh dgslf hgsdljhf gljhgdljhf gjlsdhgflj hsgdlfhg hgdjgfjhdgfjl hdjfh jhdj lfhgjl f!!!",
          fromMe: false,
        },
        {
          id: 4,
          message:
            "Как ты поживаешь? Давно тебя не слышно и не видно! У тебя все ок?",
          fromMe: true,
        },
        { id: 5, message: "Уже скучаю!", fromMe: true },
        { id: 6, message: "Когда сможем встретиться?", fromMe: true },
        { id: 7, message: "Все хорошо, при встрече расскажу))", fromMe: false },
        { id: 8, message: "Давай в субботу в эту? Сможешь?", fromMe: false },
        {
          id: 9,
          message: "Да, супер! Договорились. До субботы!",
          fromMe: true,
        },
      ],
    },
    profilePage: {
      posts: [
        { id: 1, message: "Lorem", likesCount: 12 },
        {
          id: 2,
          message: "Hello, best of the best social network!",
          likesCount: 87,
        },
        { id: 3, message: "wow!", likesCount: 4 },
      ],
      textAreaInput: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Inna" },
        { id: 2, name: "Ira" },
        { id: 3, name: "Mira" },
        { id: 4, name: "Lisa" },
        { id: 5, name: "Nastya" },
        { id: 6, name: "Lena" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  get state() {
    return this._state;
  },
  subscribe(callBack) {
    this._callSubscriber = callBack;
  },
  //-----
  dispatch(action) {
    // {type: 'ADD-POST'}
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 4,
        message: this._state.profilePage.textAreaInput,
        likesCount: 8,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.textAreaInput = "";
      this._callSubscriber(store);
    } else if (action.type === "UPDATE-TEXT-AREA-POST") {
      this._state.profilePage.textAreaInput = action.newText;
      this._callSubscriber(store);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const onTextAreaChangeActionCreator = (text) => ({
  type: UPDATE_TEXT_AREA_POST,
  newText: text,
});
