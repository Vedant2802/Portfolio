import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUsers } from "../store/authSlice";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("triggered");
    const data = {
      username: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(data);
    dispatch(addNewUsers(data));
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <div
      id="login-container"
      className="bg-gray-300 border-2 border-black rounded-lg h-dvh flex justify-center"
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-center items-center gap-2 "
      >
        <input
          ref={emailRef}
          type="text"
          placeholder="Enter your email"
          className="border-2 border-black rounded-lg cursor-pointer"
        ></input>
        {/* <input
          ref={passwordRef}
          type="password"
          placeholder="Enter your password"
          className="border-2 border-black rounded-lg cursor-pointer"
          //   onToggle={}
        ></input> */}
        <div className="relative w-full">
          <input
            ref={passwordRef}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="border-2 border-black rounded-lg px-4 py-2 w-full pr-10"
          />
          <span
            onClick={togglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl"
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <button
          className="border-2 border-black rounded-lg cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
