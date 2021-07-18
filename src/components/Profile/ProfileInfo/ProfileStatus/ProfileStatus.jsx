import React from "react";
import style from "./ProfileStatus.module.css";
import { ClickAwayListener, IconButton, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";
import { useFormik } from "formik";

export const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };
  const onSubmit = async (status) => {
    await props.setStatus(status);
    deactivateEditMode();
  };
  return (
    <>
      {editMode ? (
        <StatusForm
          onSubmit={onSubmit}
          onBlur={deactivateEditMode}
          status={props.status}
        />
      ) : (
        <p
          className={props.isOwner ? style.statusOwner : style.status}
          onClick={props.isOwner ? activateEditMode : null}
        >
          {props.status || "enter status"}
        </p>
      )}
    </>
  );
};

const StatusForm = (props) => {
  let formik = useFormik({
    initialValues: { status: props.status },
    onSubmit: async (values) => await props.onSubmit(values.status),
  });

  return (
    <ClickAwayListener onClickAway={props.onBlur}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="status"
          autoFocus={true}
          value={formik.values.status}
          onChange={formik.handleChange}
        />
        <IconButton
          color="primary"
          type="submit"
          disabled={formik.isSubmitting}
        >
          <SendIcon />
        </IconButton>
      </form>
    </ClickAwayListener>
  );
};
