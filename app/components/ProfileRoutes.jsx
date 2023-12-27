"use client";

import {
  CloseRounded,
  FavoriteBorder,
  LogoutOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import { Backdrop, Divider, IconButton, Modal } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserLogoutSuccess, clearFav } from "../action/action";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const ProfileRoutes = () => {
  const [logout, setLogout] = useState(false);

  // dispatch to access action handlers
  const dispatch = useDispatch();

  // logout functionality
  function logoutUser() {
    try {
      dispatch(UserLogoutSuccess());
      toast.success("Logout Success");
      Cookies.set("authenticated", false);
      dispatch(clearFav());
      window.location.replace("/");
    } catch (error) {
      console.log("Error in logout ", error);
    }
  }
  return (
    <div>
      {/* redirect to /profile where user can see their favs */}
      <Link href={"/profile"}>
        <div className="flex py-4 cursor-pointer hover:bg-red-100 ">
          <div className="icon pl-5">
            <FavoriteBorder />
          </div>
          <div className="text ml-5">
            <h1>Favourites</h1>
          </div>
        </div>
      </Link>
      <Divider />

      {/* just for dummy notification */}
      <Link href={"/profile/notifications"}>
        <div className="flex py-4 cursor-pointer hover:bg-red-100">
          <div className="icon pl-5">
            <NotificationsOutlined />
          </div>
          <div className="text ml-5">
            <h1>Notifications</h1>
          </div>
        </div>
      </Link>
      <Divider />
      
      {/* Danger Zone for like logout btn  */}
      <h1 className="ml-4 text-red-600 mt-4">Danger Zone</h1>

      <div
        className="flex py-4 cursor-pointer hover:bg-red-500 hover:text-white"
        onClick={() => setLogout(true)}
      >
        <div className="icon pl-5">
          <LogoutOutlined />
        </div>
        <div className="text ml-5">
          <h1>Logout</h1>
        </div>
      </div>
      {/* when user click logout btn this conformation popup open */}
      <Backdrop open={logout} onClose={() => setLogout(false)}>
        <div className=" p-2 rounded w-[400px] bg-white">
          <div className="heading flex w-full justify-between items-center">
            <h1 className="text-xl font-semibold">Logout Conformation</h1>
            <IconButton onClick={() => setLogout(false)}>
              <CloseRounded />
            </IconButton>
          </div>
          <Divider />
          <div className="msg">
            <h1>Are you sure you want to logout?</h1>
            <p>
              Your Favourite and other data will be{" "}
              <span className="text-red-500">DELETED</span>
            </p>
          </div>
          <div className="btns flex justify-end p-1">
            <button className="mx-2 p-1" onClick={() => setLogout(false)}>
              Cancle
            </button>
            <button
              className="mx-2 bg-red-500 p-1 text-white rounded"
              onClick={() => logoutUser()}
            >
              Logout
            </button>
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default ProfileRoutes;
