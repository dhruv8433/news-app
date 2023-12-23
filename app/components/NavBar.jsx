"use client";

import { Button, Container } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import SignupForm from "./SignupForm";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pb-3 primary-bg">
      <Container>
        <nav className="flex flex-row justify-between text-center items-center pt-3">
          <div className="left text-bold">
            <Link href={"/"} className="text-2xl space-y-1" style={{}}>
              ENews
            </Link>
          </div>
          <div className="right px-4">
            <Link href={"/"}  className="text-white mx-2">
              Home
            </Link>
            <Link href={"/"} className="text-white mx-2">
              Top News
            </Link>
            <Link href={"/"} className="text-white mx-2">
              Live news
            </Link>
            <Button
              variant="outlined"
              onClick={() => setOpen(true)}
              size="small"
              className="text-white"
            >
              SignUp
            </Button>
            <SignupForm open={open} setOpen={setOpen} />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
