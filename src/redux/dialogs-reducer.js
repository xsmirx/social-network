const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Inna",
      lastMessege: "Lorem ipsum dolor sit amet.",
      timeLastMessege: "10:50",
    },
    {
      id: 2,
      name: "Ira",
      lastMessege: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      timeLastMessege: "09:45",
    },
    {
      id: 3,
      name: "Sonya",
      lastMessege:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima...",
      timeLastMessege: "yesterday",
    },
    {
      id: 4,
      name: "Nastya",
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
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let message = {
        id: 10,
        message: state.newMessageBody,
        fromMe: true,
      };
      state.chat.push(message);
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export const updateNewMessageBodyActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
