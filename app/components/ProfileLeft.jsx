"use client";

import React from "react";
import { Avatar, Divider } from "@mui/material";
import ProfileRoutes from "./ProfileRoutes";
import { useSelector } from "react-redux";
import { title } from "../config/config";

const ProfileLeft = () => {
  // getting user detailes from redux like name, email and image
  const userDetails = useSelector((state) => state.auth.user);

  document.title = `Profile | ${title}`;

  return (
    // profile left section -> reusable
    <div className="user my-5 h-[600px] border rounded">
      <div className="usericon flex justify-center mt-4">
        <Avatar
          src={userDetails.url !== null ? userDetails.url : ""}
          sx={{ height: 200, width: 200 }}
        />
      </div>
      <div className="info flex flex-col justify-center w-full mb-4 text-center">
        <h1 className="text-3xl font-bold text-primary">{userDetails.name}</h1>
        <h1 className="text-2xl font-semibold">{userDetails.email}</h1>
      </div>
      <Divider />
      <div className="options">
        <ProfileRoutes />
      </div>
    </div>
  );
};

export default ProfileLeft;
