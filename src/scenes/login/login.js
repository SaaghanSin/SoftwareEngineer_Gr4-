import { useRef, useState, useEffect, useContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import "./login.css";
import axios from "../../api/axios";
import logo from "../../assets/images/bk.png";
import MyButton from "../../components/button/Button";
import Button_login from "../../components/button/button_login/button_login";
import { toast } from "react-toastify";
import { useMyContext } from "../../components/contextModify";
const LOGIN_URL = "/auth";
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const { userName, setUsr, pageNum, setPageNumber } = useMyContext();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/print");
    }
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost/spso-service/src/api/GetPage.php`,
        {
          params: { TenDangNhap: user },
        }
      );

      console.log("Response from the server:", response);

      // Parse the JSON data from the combined string
      const responseData = JSON.parse(
        response.data.split("Connected successfully")[1].trim()
      );
      console.log(responseData);
      if (responseData.success) {
        localStorage.setItem("pnum", responseData.data.SoTrangSoHuu);
      } else {
        console.log("No data found for the given username");
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Request setup error:", error.message);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleLogin = async (e) => {
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
    console.log("run");

    try {
      // Make a POST request to your PHP script
      const formData = new FormData();
      formData.append("TenDangNhap", user);
      formData.append("MatKhau", pwd);

      const response = await axios.post(
        "http://localhost/spso-service/src/api/login.php",
        formData
      );
      // Find the position where the actual JSON string starts
      const jsonStartIndex = response.data.indexOf("{");

      // Extract the JSON string
      const jsonSubstring = response.data.slice(jsonStartIndex);

      // Parse the JSON string
      const responseData = JSON.parse(jsonSubstring);

      const isSuccess = responseData.success;

      // Handle the response
      if (isSuccess) {
        // Login successful
        if ("token" in responseData) {
          const token = responseData.token;
          localStorage.setItem("token", token);
          localStorage.setItem("usr", user);

          console.log("Token:", responseData.token);
        }
        if ("type" in responseData) {
          console.log(responseData);
          const type = responseData.type;
          setUsr(user);
          console.log(user);
          if (type === true) {
            navigate("/print");
            fetchData();
            window.location.reload();
          } else {
            navigate("/printinfo");
          }
        }
      } else {
        // Login failed
        setErrMsg("Tài khoản không tồn tại");
        errRef.current.focus();
        return;
      }
    } catch (error) {
      console.log("Error during login:");
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
                <form onSubmit={handleLogin}>
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
