"use client";

import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Icon,
  IconButton,
  Modal,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import SignupForm from "./SignupForm";
import { useRouter } from "next/navigation";
import { Close, Menu, Public, SearchRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [searchPopup, setSearchPopup] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const SpecificNewsSerached = (event) => {
    if (event.key === "Enter") {
      console.log("Enter Clicked");
      setSearchPopup(false);
      router.push(`/query/${event.target.value}`);
    }
  };

  const user = useSelector((state) => state.auth);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const userImage = user.isAuthenticated ? user.user.url : "";
  return (
    <div className="pb-3 primary-bg">
      <Container>
        <nav className="flex flex-row justify-between text-center items-center pt-3">
          <div className="flex left text-bold">
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton onClick={() => setDrawer(true)}>
                <Menu sx={{ color: "white" }} />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawer}
                onClose={() => setDrawer(false)}
              >
                <Box width={300}></Box>
              </Drawer>
            </Box>
            <Link href={"/"} className="text-2xl space-y-1 text-white flex">
              <div className="flex justify-center text-center items-center">
                <Public />
                <h1>ENews</h1>
              </div>
            </Link>
          </div>
          <Box
            className="right flex px-4"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Link href={"/"} className="text-white mx-2">
              Home
            </Link>
            <Link href={"/popular-news"} className="text-white mx-2">
              Popular
            </Link>
            <input
              type="text"
              className="mx-2 p-1 rounded"
              placeholder="search anything"
              onKeyPress={(e) => SpecificNewsSerached(e)}
            />
            {isAuthenticated ? (
              <Link href={"/profile"}>
                <Avatar
                  sx={{ height: 32, width: 32 }}
                  src={userImage ? userImage : ""}
                />
              </Link>
            ) : (
              <Button
                variant="contained"
                onClick={() => setOpen(true)}
                size="small"
                className="text-white"
              >
                SignUp
              </Button>
            )}
            <SignupForm open={open} setOpen={setOpen} />
          </Box>

          {/* for mobile view */}
          <Box
            className="items-center"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <IconButton onClick={() => setSearchPopup(true)}>
              <SearchRounded sx={{ color: "white" }} />
            </IconButton>

            {user ? (
              <Link href={"/profile"}>
                <Avatar
                  sx={{ height: 32, width: 32 }}
                  src={userImage ? userImage : ""}
                />
              </Link>
            ) : (
              <Button
                variant="contained"
                onClick={() => setOpen(true)}
                size="small"
                className="text-white"
              >
                SignUp
              </Button>
            )}
            <SignupForm open={open} setOpen={setOpen} />
            <Backdrop open={searchPopup} onClose={() => setSearchPopup(false)}>
              <Box
                className="bg-white text-start flex flex-col justify-start overflow-hidden rounded p-2"
                height={150}
                width={200}
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-red-500 font-semibold">Search Here</h1>
                  <IconButton onClick={() => setSearchPopup(false)}>
                    <Close />
                  </IconButton>
                </div>
                <Divider />

                <input
                  type="text"
                  className="p-1 my-4 rounded border w-[180px] border-black"
                  placeholder="search anything"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="flex justify-end">  
                  <button
                    onClick={() => {
                      router.push(`/query/${query}`);
                      setSearchPopup(false);
                    }}
                    className="text-right hover:text-white hover:bg-red-500 rounded py-1 px-2 border"
                  >
                    Search
                  </button>
                </div>
              </Box>
            </Backdrop>
          </Box>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
