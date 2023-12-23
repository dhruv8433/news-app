"use client";

import toast from "react-hot-toast";
import { auth } from "../firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";

export async function onSignup(
  setLoading,
  onCaptchVerify,
  setSignupLoading,
  setOtpModel,
  setOpen
) {
  setLoading(true);
  onCaptchVerify();
  setSignupLoading(true);

  const appVerifier = window.recaptchaVerifier;

  const ph = localStorage.getItem("contact");
  const formatPh = "+91" + ph;
  console.log("pghone", formatPh);

  signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      toast.success("OTP sended successfully!");
      setOpen(false);
      setLoading(false);
      setSignupLoading(false);
      setOtpModel(true);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
}
