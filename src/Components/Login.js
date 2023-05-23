import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Config } from "../Config";
import UserContext from "../Context/UserContext";

function Login() {
  let navigate = useNavigate();
  const userContextData = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const login = await axios.post(`${Config.api}/login`, values);
        if (login.data.token) {
          window.localStorage.setItem("react_token", login.data.token);
          window.localStorage.setItem("userName", login.data.name);
          userContextData.setLoginPerson(login.data.name);
          navigate("/success");
        } else {
          alert(login.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      {/* Hello world */}

      {/* Outer Row */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block h-100vh bg-login-image">
                  <img
                    class="card-img-top"
                    src="https://previews.123rf.com/images/stuartphoto/stuartphoto1901/stuartphoto190100933/116118306-reset-password-button-to-redo-security-of-pc-new-code-for-securing-computer-3d-illustration.jpg"
                    alt="Card"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Welcome to password reset flow
                      </h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="user">
                      <div className="form-group">
                        <label className="p-1 text-muted">User Name</label>
                        <input
                          type={"text"}
                          className="form-control form-control-user mb-2"
                          name={"username"}
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          placeholder="Enter User Name..."
                        />
                      </div>
                      <div className="form-group">
                        <label className="p-1 text-muted">Password</label>
                        <input
                          type={"password"}
                          className="form-control form-control-user"
                          name={"password"}
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          placeholder="Enter Password..."
                        />
                      </div>
                      <button type={"submit"} className="btn btn-primary">
                        LOGIN
                      </button>
                    </form>
                    <div className="row">
                      <Link to="/ForgetPassword">Forgot Password?😔</Link>
                      <Link to="/register">Create an Account...! 👈</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
