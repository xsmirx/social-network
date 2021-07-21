import React from "react";
import style from "./Login.module.css";
import { useFormik } from "formik";
import { TextField, Checkbox, Button, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import * as yup from "yup";
import { Redirect } from "react-router-dom";

export const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className={style.login}>
      <div className={style.loginForm}>
        {props.formError && <Alert severity="error">{props.formError}</Alert>}
        <LoginForm {...props} />
      </div>
    </div>
  );
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: "10px auto",
    },
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
      captcha: null,
    },
    onSubmit: async (values) => {
      await props.login(
        values.email,
        values.password,
        values.rememberMe,
        values.captcha
      );
    },
    validationSchema: validationSchema,
  });
  return (
    <form className={classes.root} onSubmit={formik.handleSubmit}>
      <TextField
        name="email"
        label="e-mail"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.errors.email}
        variant="outlined"
        color="primary"
        fullWidth
      />
      <TextField
        name="password"
        label="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.errors.password}
        variant="outlined"
        color="primary"
        fullWidth
      />
      <Checkbox
        name="rememberMe"
        checked={formik.values.rememberMe}
        onChange={formik.handleChange}
        color="primary"
      />
      remember me
      {props.captchaUrl && (
        <>
          <img src={props.captchaUrl} alt="captcha" />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            name="captcha"
            label="captcha"
            value={formik.values.captcha || ""}
            onChange={formik.handleChange}
          />
        </>
      )}
      <Button
        type="submit"
        variant={"contained"}
        color="primary"
        disabled={formik.isSubmitting}
        fullWidth
      >
        log in
      </Button>
    </form>
  );
};
