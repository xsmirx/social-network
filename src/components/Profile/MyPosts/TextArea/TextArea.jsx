import { IconButton, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useFormik } from "formik";
import React from "react";
import style from "./Textarea.module.css";

export function TextArea(props) {
  const formik = useFormik({
    initialValues: { textArea: "" },
    onSubmit: async (values) => {
      await props.addPost(values.textArea);
    },
  });

  return (
    <form className={style.addpost} onSubmit={formik.handleSubmit}>
      <TextField
        label="new post text"
        fullWidth
        multiline
        rows={3}
        variant="outlined"
        name="textArea"
        onChange={formik.handleChange}
        value={formik.values.textArea}
      />
      <div>
        <IconButton type="submit">
          <SendIcon />
        </IconButton>
      </div>
    </form>
  );
}
