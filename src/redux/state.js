export const state = {
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
        lastMessege: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
      { id: 3, message: "I'm learning English now))", fromMe: false },
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
      { id: 9, message: "Да, супер! Договорились. До субботы!", fromMe: true },
    ],
  },
  profilePage: {
    posts: [
      { id: 1, message: "Lorem", likesCount: 12 },
      {
        id: 2,
        messege: "Hello, best of the best social network!",
        likesCount: 87,
      },
      { id: 3, message: "wow!", likesCount: 4 },
      { id: 3, message: "wow!", likesCount: 4 },
      { id: 3, message: "wow!", likesCount: 4 },
    ],
  },
};
