import { useNavigate } from "react-router-dom";
import login from "../assets/kv-login.jpeg";
import Logo from "../assets/kv-logo.png";
import Button from "../componenets/Button";
import TextField from "../componenets/TextField";
import "./styles.scss";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  // const [userName, setUserName] = useState("");
  localStorage.setItem("token", false);

  const navigate = useNavigate();
  const handleClick = () => {
    const token = localStorage.getItem("token");
    if (Boolean(token) === true) {
      navigate("/employees");
    }
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

  const onChangeUser = (user) => {
    if (user.length > 10) {
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
          <img src={login} alt="Login Image" className="login-image" />
        </div>
      </div>
      <div className="login">
        <form action="/" method="post">
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

          <Button label="Log In" onClick={handleClick} />
        </form>
      </div>
    </div>
  );
};
export default Login;
