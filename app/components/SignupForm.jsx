"use client";

import { Backdrop, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import OtpContainer from "./OtpContainer";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { onSignup } from "../Services/OnSignUp";
import { RecaptchaVerifier, getAuth } from "firebase/auth";
import { CgSpinner } from "react-icons/cg";

const SignupForm = ({ open, setOpen }) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [otpModel, setOtpModel] = useState(false);
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);

  async function onCaptchVerify() {
    const auth = getAuth();
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup(setLoading, onCaptchVerify);
          },
        }
      );
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    onSignup(
      setLoading,
      onCaptchVerify,
      setSignupLoading,
      setOtpModel,
      setOpen,
      ph
    );
    // try {
    //   const response = await AddUser(userData);
    //   console.log(response);
    //   if (response) alert("user created successfully");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <>
      <Backdrop className="backdrop" open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col justify-center items-center h-full text-start">
          <form
            method="POST"
            className="bg-white shadow-md rounded p-4 w-80"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between items-center text-center mb-6">
              <div className="">
                <h2 className="text-2xl font-bold text-start">Sign Up</h2>
              </div>
              <div className="">
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
                placeholder="Enter your username"
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Phone No.
              </label>
              <PhoneInput
                country={"in"}
                value={ph}
                className="appearance-none border rounded w-full border-none"
                onChange={setPh}
                inputStyle={{ width: "240px" }}
                // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div id="recaptcha-container"></div>
            <div className="flex items-center justify-center">
              <button
                onClick={onSignup}
                className="w-full hover:bg-red-600 flex gap-1 items-center justify-center py-2 text-white rounded secondry-bg"
              >
                {signupLoading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Sign up</span>
              </button>
            </div>
          </form>
        </div>
      </Backdrop>
      <Backdrop open={otpModel}>
        <OtpContainer
          // open={otpModel}
          setOpen={setOtpModel}
          loading={loading}
          setLoading={setLoading}
        />
      </Backdrop>
    </>
  );
};

export default SignupForm;
