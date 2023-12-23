"use client";
import React, { useState } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import toast from "react-hot-toast";

const OtpContainer = ({ setOpen, loading, setLoading }) => {
  const [otp, setOtp] = useState(null);
  const [user, setUser] = useState(null);

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        // setUser(res.user);
        setLoading(false);
        setOpen(false)
        toast.success("signup successful")
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  const phone = localStorage.getItem("contact");

  return (
    <div className="flex flex-col justify-center items-center h-full text-start">
      <form
        method="POST"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
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
        <p className="text-secondary">{phone}</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          OTPLength={6}
          otpType="number"
          disabled={false}
          autoFocus
          className="opt-container"
        ></OtpInput>
        <button className=" w-full my-2 flex gap-1 items-center justify-center py-2.5 border rounded">
          Resend OTP
        </button>
        <button
          onClick={onOTPVerify}
          className=" w-full flex gap-1 items-center justify-center py-2.5 text-white rounded secondry-bg"
        >
          {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
          <span>Verify OTP</span>
        </button>
      </form>
    </div>
  );
};

export default OtpContainer;