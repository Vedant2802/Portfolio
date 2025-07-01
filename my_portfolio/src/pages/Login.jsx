import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewUsers } from "../store/authSlice";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("triggered");
    const data = {
      username: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(data);
    dispatch(addNewUsers(data));
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
        <input
          ref={passwordRef}
          type="text"
          placeholder="Enter your password"
          className="border-2 border-black rounded-lg cursor-pointer"
        ></input>
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
