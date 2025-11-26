import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Registration = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePassToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailPattern = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;

    setSuccess(false);
    setError("");
    if (!passwordPattern.test(password)) {
      setError(
        "Password must have 8+ characters, uppercase, lowercase, number & special character"
      );
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Email must be a valid Gmail address");
    }

    if (!terms) {
      setError("You must agree to the Terms and Conditions!");
      return;
    }

    console.log(name, photo, email, password, terms);
    navigate("/", { replace: true });
  };
  return (
    <>
      <>
        <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold">Create a new account.</h2>
            <form className="my-5" onSubmit={handleSubmit}>
              <fieldset className="fieldset gap-4">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Photo Url"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative flex  items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div
                    onClick={handlePassToggle}
                    className="absolute right-8 cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>

                <label className="label">
                  <input type="checkbox" name="terms" className="checkbox" />
                  Accept Our Terms and Condition!
                </label>
                <button className="btn btn-secondary hover:bg-white hover:text-secondary mt-4">
                  Registration
                </button>
              </fieldset>
            </form>
            {success && (
              <p className="text-xl text-green-500">
                "Account Successfully Register"
              </p>
            )}
            {error && <p className="text-xl text-red-500">{error}</p>}
            <p className="text-left">
              Already Have an Account ? Please{" "}
              <Link className="text-blue-400 underline" to={"/login"}>
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </>
    </>
  );
};

export default Registration;
