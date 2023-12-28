"use client";
import React, { useState } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import toast from "react-hot-toast";
import { AddUser } from "../Services/addUser";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { UserLoginSuccess } from "../action/action";

const OtpContainer = ({ user, setOpen, loading, setLoading, phoneNo }) => {
  const [otp, setOtp] = useState(null);

  const dispatch = useDispatch();

  async function addUserData(user) {
    try {
      // adding user to db
      const response = await AddUser(user);
      console.log(response);
      toast.success("user login successfully");
    } catch (error) {
      console.log("error in creating user: ", error);
    }
  }

  async function onOTPVerify() {
    setLoading(true);

    if (!window.confirmationResult) {
      // Log an error or handle the absence of confirmationResult
      console.log("Confirmation result not available");
      setLoading(false);
      return;
    }

    window.confirmationResult
      .confirm(otp)
      .then((res) => {
        // after otp verification success
        addUserData(user);
        dispatch(UserLoginSuccess(user));
        console.log(res);
        setLoading(false);
        setOpen(false);
        console.log("Verify success");
        user.phone = phoneNo;
        console.log(user);
        toast.success("Login successful");
        Cookies.set("authenticated", true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Verification failed");
      });
  }
  const phone = "";

  return (
    <div className="flex flex-col justify-center items-center h-full text-start">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex justify-between items-center text-center mb-6">
          <div className="">
            <h2 className="text-2xl font-bold text-start">Sign Up</h2>
          </div>
          <div className="">
            <IconButton onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </div>
        </div>

        <div className="bg-white w-fit mx-auto p-4 rounded-full">
          <BsFillShieldLockFill size={30} className="custom-icon" />
        </div>
        <label htmlFor="otp" className="font-small text-md text-center">
          Enter Verfication code send on
        </label>
        <p className="text-secondary">{phoneNo}</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          OTPLength={6}
          otpType="number"
          disabled={false}
          autoFocus
          className="opt-container"
        ></OtpInput>
        <button
          onClick={onOTPVerify}
          className=" w-full flex gap-1 items-center justify-center py-2.5 text-white rounded secondry-bg"
        >
          {/* spinner for loading */}
          {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
          <span>Verify OTP</span>
        </button>
      </div>
    </div>
  );
};

export default OtpContainer;
