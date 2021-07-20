import React from "react";
import style from "./ProfileInformationForm.module.css";
import { Button, Switch, TextField } from "@material-ui/core";
import { useFormik } from "formik";

const ProfileInformationForm = (props) => {
  const formik = useFormik({
    initialValues: props.profile,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => await props.setProfile(values),
  });

  console.log(formik);

  return (
    <form
      className={style.form}
      onSubmit={formik.handleSubmit}
      onChange={formik.handleChange}
    >
      <div className={style.form__columns}>
        <div className={style.form__fields}>
          <TextField
            name="fullName"
            variant="outlined"
            type="text"
            size="small"
            color="primary"
            label="Name"
            value={formik.values.fullName || ""}
          />
          <TextField
            name="aboutMe"
            variant="outlined"
            type="text"
            size="small"
            color="primary"
            label="About Me"
            value={formik.values.aboutMe || ""}
          />
          <p>
            <Switch
              size="small"
              color="primary"
              name="lookingForAJob"
              checked={formik.values.lookingForAJob}
            />
            looking for a job
          </p>
          <TextField
            name="lookingForAJobDescription"
            variant="outlined"
            multiline
            size="small"
            color="primary"
            label="Job description"
            value={formik.values.lookingForAJobDescription || ""}
          />
        </div>
        <div className={style.form__fields}>
          {Object.keys(props.profile.contacts).map((value) => {
            return (
              <TextField
                key={value}
                name={"contacts." + value}
                variant="outlined"
                type="text"
                size="small"
                color="primary"
                label={`${value}`}
                value={formik.values.contacts[value] || ""}
              />
            );
          })}
        </div>
      </div>

      <Button type="submit" color="primary" variant="contained">
        save changes
      </Button>
    </form>
  );
};

export default ProfileInformationForm;
