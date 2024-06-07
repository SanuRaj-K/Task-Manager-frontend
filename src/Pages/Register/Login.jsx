import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
            Login
          </h1>
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                Email
              </label>
              <input
                onChange={(e) => handleOnChange(e)}
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                onChange={(e) => handleOnChange(e)}
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
            >
              Login
            </button>
          </form>
          <div className="text-center"></div>
          <p className="text-xs text-gray-600 text-center mt-10">
            &copy; 2023 WCS LAT
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
