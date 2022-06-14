/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../Actions/userActions";
import Header from "../../Components/Header";
import { toast } from 'react-toastify'

const SignInScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { loading, response, error } = useSelector((store) => store.userSignIn);

  const onSignIn = () => {
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (response && response.status === "success") {
      sessionStorage.setItem("Authorization", "Bearer " + response.token);
      if (response.data.role === "ADMIN") {       // role based login
        props.history.push("/admin-home");
      } else if (response.data.role === "EMPLOYEE") {
        props.history.push("/employee-home");
      } else if (response.data.role === "CUSTOMER") {
        props.history.push("/customer-home");
      } else if (response.data.role === "DELIVERY_PERSON") {
        props.history.push("/delivery-home");
      }
    }
    else if (error) {
      toast.error('Invalid Login Credentials. Try again!!', { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
    }
  }, [loading, response, error]);

  return (
    <div className="Screen">
      <div className="row justify-content-center align-items-center">
          <div class="col-md-8 col-lg-0 col-xl-5">
            <label className="text-center display-6">SignIn to the world of SPO+GYM</label>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid" alt="Sample image" />
          </div>
        <div className="col-md-4 col-lg-0 col-xl-4">
          <div className="card card-container">
            <Header title="Login" />
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
                placeholder="*******"
              />
            </div>

            <div className="form-group float-end">
              <br />
              New around here? <Link to="/signup">Sign Up</Link>
            </div>

            <div className="form-group">
              <button onClick={onSignIn} className="btn btn-info">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;