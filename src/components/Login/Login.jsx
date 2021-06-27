import React from "react";
import style from "./Login.module.css";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import { TextField, Checkbox, Button } from "@material-ui/core";
import * as yup from "yup";

export const Login = (props) => {
  if (props.isAuth) return <Redirect to="/" />;
  return (
    <div className={style.login}>
      <div className={style.loginForm}>
        <h1>log in</h1>
        <LoginForm {...props} />
      </div>
    </div>
  );
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: { email: "", password: "", rememberMe: false },
    onSubmit: (values) =>
      props.login(values.email, values.password, values.rememberMe),
    validationSchema: validationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <TextField
          name="email"
          label="e-mail"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.errors.email}
          color="primary"
          fullWidth
        />
      </div>
      <div>
        <TextField
          name="password"
          label="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.errors.password}
          color="primary"
          fullWidth
        />
      </div>
      <div>
        <Checkbox
          name="rememberMe"
          checked={formik.values.rememberMe}
          onChange={formik.handleChange}
          color="primary"
        />
        remember me
      </div>
      <Button type="submit" variant={"contained"} color="primary" fullWidth>
        log in
      </Button>
    </form>
  );
};
