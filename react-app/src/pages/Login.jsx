import { useNavigate } from "react-router-dom";
import Login_kv from "../assets/kv-login.jpeg";
import Logo from "../assets/kv-logo.png";
import Button from "../componenets/Button";
import TextField from "../componenets/TextField";
import "./styles.scss";
import { useEffect, useRef, useState } from "react";
import { useLoginMutation } from "../api/loginApi";

const Login = () => {
  // const [userName, setUserName] = useState("");
  // localStorage.setItem("token", true);

  const navigate = useNavigate();
  const [login, { isSuccess, data }] = useLoginMutation();
  const handleClick = async () => {
    const response = await login({
      email: info.username,
      password: info.password,
    });

    navigate("/employees");
  };
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });
  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false);
  const userNameRef = useRef();

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("token", data.data);
      console.log(isSucess);
    }
  }, [isSuccess, data]);

  const onChangeUser = (user) => {
    if (user < 20) {
      setUserError(true);
    } else {
      setUserError(false);
      setInfo({ ...info, username: user });
      console.log(user);
    }
  };

  const onChangePass = (pass) => {
    setInfo({ ...info, password: pass });
    console.log(pass);
  };
  return (
    <div className="login1">
      <div className="hero">
        <div className="wrapper-hero">
          <img src={Login_kv} alt="Login Image" className="login-image" />
        </div>
      </div>
      <div className="login">
        <form>
          <img src={Logo} alt="Logo" className="logo" />
          <TextField
            label="Username"
            ref={userNameRef}
            value={info.username}
            placeholder="Username"
            onChange={onChangeUser}
            error={userError}
          />
          <TextField
            label="Password"
            placeholder="Password"
            type="password"
            field="password"
            onChange={onChangePass}
          />

          <Button label="Log In" type="button" onClick={handleClick} />
        </form>
      </div>
    </div>
  );
};
export default Login;
