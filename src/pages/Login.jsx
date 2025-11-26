import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handlePassToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    console.log(email, password);
  };

  const HandleForgetpass = (e) => {
    e.preventDefault();
    const userEmail = emailRef.current.value;
    // alert("Check Your Email :" + userEmail);
    console.log(userEmail);
  };
  return (
    <>
      <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <form className="my-5 " onSubmit={handleLoginSubmit}>
            <fieldset className="fieldset gap-4">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>

              <div className="relative flex  items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input "
                  placeholder="Password"
                />
                <div
                  onClick={handlePassToggle}
                  className="absolute right-8 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <div>
                <a onClick={HandleForgetpass} className="link link-hover">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-secondary hover:bg-white hover:text-secondary mt-4">
                Login
              </button>
            </fieldset>
          </form>
          {error && <p className="text-xl text-red-500">{error}</p>}
          <p className="text-left">
            Already Have an Account ? Please{" "}
            <Link className="text-blue-400 underline" to={"/registration"}>
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
