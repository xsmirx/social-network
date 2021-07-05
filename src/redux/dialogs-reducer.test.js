import dialogsReducer, { sendMessageActionCreator } from "./dialogs-reducer";

describe("testing dialogs-reducer", () => {
  let state = {
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
  };

  test("message should be added", () => {
    let action = sendMessageActionCreator("new Message");
    let newState = dialogsReducer(state, action);
    expect(newState.chat).toHaveLength(state.chat.length + 1);
  });

  test("message should be equal of new message", () => {
    let action = sendMessageActionCreator("new Message");
    let newState = dialogsReducer(state, action);
    expect(newState.chat[newState.chat.length - 1]).toHaveProperty(
      "message",
      "new Message"
    );
    expect(newState.chat[newState.chat.length - 1]).toHaveProperty(
      "fromMe",
      true
    );
  });

  test("message id should be +1 ", () => {
    let action = sendMessageActionCreator("new Message");
    let newState = dialogsReducer(state, action);
    expect(newState.chat[newState.chat.length - 1]).toHaveProperty(
      "id",
      state.chat.length + 1
    );
  });
});
