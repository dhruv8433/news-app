"use client";

import { Backdrop, IconButton } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import OtpContainer from "./OtpContainer";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { onSignup } from "../Services/OnSignUp";
import { RecaptchaVerifier, getAuth } from "firebase/auth";
import { CgSpinner } from "react-icons/cg";
import { Google } from "@mui/icons-material";
import { handleSignIn } from "../Services/GoogleSignup";
import { useDispatch } from "react-redux";

const SignupForm = ({ open, setOpen }) => {
  // deefault user state
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    url: "https://c0.klipartz.com/pngpicture/136/22/gratis-png-perfil-de-usuario-computadora-iconos-chica-cliente-avatar.png",
  });

  // states for open otp modal, setPhonenumber and loadings
  const [otpModel, setOtpModel] = useState(false);
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);

  // when user verify capture
  async function onCaptchVerify() {
    const auth = getAuth();
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // callback function signUp that contain all other stuff like ph, setphone etc...
            onSignup({
              setLoading,
              onCaptchVerify,
              setSignupLoading,
              setOtpModel,
              setOpen,
              ph,
            });
          },
        }
      );
    }
  }

  // when user click sign up btn
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
  }

  // dispatch for action handlers
  const dispatch = useDispatch();

  return (
    <>
      <Backdrop className="backdrop" open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col justify-center items-center text-start bg-white shadow-md rounded p-4 w-80">
          <div className="" onSubmit={handleSubmit}>
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
                name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                placeholder="Enter your name"
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

              {/* This tag take phoneno from user and provide diffrent country code  */}
              <PhoneInput
                country={"in"}
                value={ph}
                className="appearance-none border rounded w-full border-none"
                onChange={setPh}
                inputStyle={{ width: "240px" }}
              />
            </div>

            {/* This empty div for cpature container */}
            <div id="recaptcha-container"></div>

            <div className="flex items-center justify-center">
              <button
                onClick={() =>
                  onSignup({
                    setLoading: setLoading,
                    onCaptchVerify: onCaptchVerify,
                    setOtpModel: setOtpModel,
                    setOpen: setOpen,
                    ph: ph,
                  })
                }
                className="w-full hover:bg-white hover:text-black hover:border-red-600 border flex gap-1 items-center justify-center py-2 text-white rounded secondry-bg"
              >
                {signupLoading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Sign up</span>
              </button>
            </div>
          </div>

          {/* sign up with google */}
          <div className="flex items-center justify-center w-full">
            <button
              onClick={() => handleSignIn({ dispatch, setOpen })}
              className="w-full mt-2 hover:bg-white border hover:text-black hover:border-red-600 flex gap-1 items-center text-center justify-center py-2 text-white rounded secondry-bg"
            >
              <Google className="mt-1 animate-bounce" />

              <span>Sign up with Google</span>
            </button>
          </div>
        </div>
      </Backdrop>

      {/* This backgrop for otp verify */}
      <Backdrop open={otpModel}>
        <OtpContainer
          user={userData}
          setOpen={setOtpModel}
          loading={loading}
          setLoading={setLoading}
          phoneNo={ph}
        />
      </Backdrop>
    </>
  );
};

export default SignupForm;
