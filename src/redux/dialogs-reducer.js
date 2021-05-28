const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
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
