import { useRef, useState, useEffect, useContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import "./login.css";
import axios from "../../api/axios";
import logo from "../../assets/images/bk.png";
import MyButton from "../../components/button/Button";
import Button_login from "../../components/button/button_login/button_login";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Attempt login
    const loginSuccess = handleLogin();
    if (user === "vudai@hcmut.edu.vn" && pwd === "123456") {
      setSuccess(true);
      navigate("/print");
    }
    if (user === "nngocquy75@gmail.com" && pwd === "123456") {
      setSuccess(true);
      navigate("/printinfo");
    }
    // If login was successful, proceed with server authentication
    if (loginSuccess) {
      try {
        const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({ user, pwd }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({ user, pwd, roles, accessToken });
        setUser("");
        setPwd("");
        setSuccess(true);
        navigate("/print"); // move to print page
      } catch (err) {
        // Handle server authentication errors
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
        errRef.current.focus();
      }
    }
  };
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!user) {
      setErrMsg("Vui lòng nhập tên tài khoản");
      errRef.current.focus();
      return;
    }

    if (!pwd) {
      setErrMsg("Vui lòng nhập mật khẩu");
      errRef.current.focus();
      return;
    }

    if (!isValidEmail(user)) {
      setErrMsg("Vui lòng nhập một địa chỉ email hợp lệ");
      errRef.current.focus();
      return;
    }

    if (pwd.length < 6) {
      setErrMsg("Mật khẩu phải có ít nhất 6 ký tự");
      errRef.current.focus();
      return;
    }

    if (success) {
      // Assuming successful login, navigate to the print page
      navigate("/print");
      return true; // Indicate success
    } else {
      setErrMsg(
        "Thông tin đăng nhập không đúng. Vui lòng kiểm tra lại tài khoản và mật khẩu"
      );
      errRef.current.focus();
      return false; // Indicate failure
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleDelete = () => {
    setUser("");
    setPwd("");
  };
  return (
    <div className="mylogin">
      <>
        <div class="header">
          <div class="inner-header-flex">
            {success ? (
              <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                  <a href="#">Go to Home</a>
                </p>
              </section>
            ) : (
              <section className="sectionlogin">
                <img src={logo} alt="Logo" className="logo" />
                <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <h1>Hệ thống in thông minh HCMUT</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="username" className="username">
                    Tên tài khoản
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="inputusername"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />

                  <label htmlFor="password" className="password">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="inputpassword"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                  <div className="button-container">
                    <Button_login onClick={handleLogin} className="button1">
                      Đăng nhập
                    </Button_login>
                    <Button_login onClick={handleDelete} className="button2">
                      Xóa
                    </Button_login>
                  </div>
                </form>
              </section>
            )}
          </div>

          <div>
            <svg
              className="waves"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
