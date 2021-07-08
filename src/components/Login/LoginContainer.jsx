import { connect } from "react-redux";
import { login } from "../../redux/auth-reduser";
import { Login } from "./Login";

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  formError: state.auth.messages[0],
});

const LoginContainer = connect(mapStateToProps, { login })(Login);

export default LoginContainer;
