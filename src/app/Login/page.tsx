"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  type validationProps = {
    target: any;
    preventDefault(): any;
  };

  const handleEmailChange = (e: validationProps) => {
    const { value } = e.target;
    setEmail(value);

    if (/\S+@\S+\.\S+/.test(value)) {
      setEmailError("");
    } else {
      setEmailError("Email is not valid.");
    }
  };

  const handlePasswordChange = (e: validationProps) => {
    const { value } = e.target;
    setPassword(value);

    if (value.length >= 4) {
      setPasswordError("");
    } else {
      setPasswordError("Password must be at least 4 characters.");
    }
  };

  const handleSubmit = (e: validationProps) => {
    e.preventDefault();

    let isValid = true;

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is not valid.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 4) {
      setPasswordError("Password must be at least 4 characters.");
      isValid = false;
    } else if (password.length > 8) {
      setPasswordError("Password must be at most 8 characters.");
      isValid = false;
    }

    if (isValid) {
      console.log("Form submitted:", { email, password });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-2 rounded-full">
                      <FcGoogle />
                    </div>
                    <span className="ml-4">Sign Up with Google</span>
                  </button>

                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                    <div className="bg-white p-1 rounded-full">
                      <FaGithub />
                    </div>
                    <span className="ml-4">Sign Up with GitHub</span>
                  </button>
                </div>

                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign up with e-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleSubmit}>
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                        emailError ? "border-red-500" : "border-gray-200"
                      } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {emailError && (
                      <p className="mt-2 text-sm text-red-500">{emailError}</p>
                    )}
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                        passwordError ? "border-red-500" : "border-gray-200"
                      } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {passwordError && (
                      <p className="mt-2 text-sm text-red-500">
                        {passwordError}
                      </p>
                    )}
                    <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <TiUserAdd />
                      <span className="ml-3">Sign Up</span>
                    </button>
                  </form>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by templatana's
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
              <img className="h-[880px]" src="/images/login.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
