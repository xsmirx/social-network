import { IconButton, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useFormik } from "formik";
import React from "react";
import style from "./Chat.module.css";
import { Message } from "./Message/Message";

export const Chat = (props) => {
  let messages = props.chat.map((item) => (
    <Message key={item.id} message={item.message} fromMe={item.fromMe} />
  ));

  let { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      textMessage: "",
    },
    onSubmit: async (values) => {
      await props.sendMessage(values.textMessage);
    },
  });

  return (
    <div className={style.block}>
      <div className={style.block__message}>{messages}</div>

      <form onSubmit={handleSubmit} className={style.block__input}>
        <TextField
          name="textMessage"
          fullWidth
          variant="outlined"
          multiline
          rows={2}
          onChange={handleChange}
          value={values.textMessage}
        />
        <div>
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
};
