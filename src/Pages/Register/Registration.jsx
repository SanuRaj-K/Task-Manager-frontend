import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Registration() {
  const [user, setUser] = useState({});
  const [flag, setFlag] = useState(true);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(user);
    if (!flag) {
      console.log("success");
    } else {
      console.log("fail");
    }
  };

  const validate = (values) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!regex.test(values.email)) {
      toast.error("email is not coect");
      setFlag(false);
    } else if (values.password.length < 4) {
      toast.error("Password must contain minimum 4 letters");
      setFlag(false);
    } else if (values.username === "") {
      toast.error("Enter Your Name");
      setFlag(false);
    } else {
      setFlag(true);
    }
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-8">
            <img
              src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
              alt="Logo"
              className="w-30 h-20"
            />
          </div>
          <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
            Register
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block mb-2 text-sm text-gray-600"
              >
                UserName
              </label>
              <input
                onChange={(e) => handleOnChange(e)}
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                onChange={(e) => handleOnChange(e)}
                type="text"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm text-gray-600"
              >
                {" "}
                Password
              </label>
              <input
                onChange={(e) => handleOnChange(e)}
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <button
              onClick={(e) => handleSubmit(e)}
              className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
            >
              Register
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link className="text-cyan-600" to={"/login"}>
                Login
              </Link>{" "}
            </p>
          </div>
          <p className="text-xs text-gray-600 text-center mt-8">
            &copy; 2023 WCS LAT
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
