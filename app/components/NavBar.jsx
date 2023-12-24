"use client";

import { Button, Container } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import SignupForm from "./SignupForm";
import { useRouter } from "next/navigation";
import { Public } from "@mui/icons-material";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [quert, setQuery] = useState("");
  const router = useRouter();

  const SpecificNewsSerached = (event) => {
    if (event.key === "Enter") {
      console.log("Enter Clicked");
      router.push(`/query/${event.target.value}`);
    }
  };
  return (
    <div className="pb-3 primary-bg">
      <Container>
        <nav className="flex flex-row justify-between text-center items-center pt-3">
          <div className="left text-bold">
            <Link href={"/"} className="text-2xl space-y-1 text-white flex">
              <div className="flex justify-center text-center items-center">
                <Public />
                <h1>ENews</h1>
              </div>
            </Link>
          </div>
          <div className="right px-4">
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
            <Button
              variant="contained"
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
