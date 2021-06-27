import { connect } from "react-redux";
import { login } from "../../redux/auth-reduser";
import { Login } from "./Login";

let mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export const LoginContainer = connect(mapStateToProps, { login })(Login);
