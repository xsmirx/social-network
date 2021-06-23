import React from "react";
import style from "./Login.module.css";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { setData } from "../../redux/login-reducer";
import { TextField, Checkbox, Button } from "@material-ui/core";
import * as yup from "yup";

const Login = (props) => {
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
  login: yup.string().min(3).required(),
  password: yup.string().min(6).required(),
});

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: { login: "", password: "", rememberMe: false },
    onSubmit: (values) => props.setData(values),
    validationSchema: validationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <TextField
          name="login"
          label="login"
          type="login"
          value={formik.values.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.errors.login}
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

export const LoginContainer = connect(null, { setData })(Login);
