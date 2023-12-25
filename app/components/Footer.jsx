import {
  Facebook,
  Instagram,
  Pinterest,
  Public,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import { Container, Divider, Grid, IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="primary-bg">
      <Container>
        <div className="h-[320px]">
          <Grid container>
            <Grid item xs={12} md={4}>
              <div className="flex justify-start mt-5 text-white items-center">
                <Public />
                <h1 className="text-3xl font-semibold">ENews</h1>
              </div>
              <div className="info">
                <h1 className="text-white">
                  Subscribe us and Get the latest news with us
                </h1>
                <div className="flex items-center mt-3">
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="p-1"
                    name=""
                    id=""
                  />
                  <button className="border px-4 py-[3px] text-white hover:bg-white hover:text-red-500">
                    Subscribe
                  </button>
                </div>

                <div className="icons  flex mt-10">
                  <IconButton sx={{ color: "white" }}>
                    <Instagram />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <Twitter />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <Facebook />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <Telegram />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <Pinterest />
                  </IconButton>
                </div>
                <hr />
                <div className=" text-white my-5">
                  <h1>Quick & Fast News At One Place</h1>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className="mt-5 text-white">
                <h1 className="text-xl my-2">Categories</h1>
                <hr />
              </div>
              <div className="flex justify-between w-full px-2 my-5 text-white">
                <div className="block">
                  <Link href={"/query/education"}>
                    <h1>Education</h1>
                  </Link>
                  <br />
                  <Link href={"/query/sports"}>
                    <h1>Sports</h1>
                  </Link>
                  <br />
                  <Link href={"/query/business"}>
                    <h1>Business</h1>
                  </Link>
                  <br />
                  <Link href={"/query/career"}>
                    <h1>Career</h1>
                  </Link>
                  <br />
                  <Link href={"/query/trending"}>
                    <h1>Trending</h1>
                  </Link>
                  <br />
                </div>
                <div className="block">
                  <Link href={"/query/fun"}>
                    <h1>Fun</h1>
                  </Link>
                  <br />
                  <Link href={"/query/movies"}>
                    <h1>Movies</h1>
                  </Link>
                  <br />
                  <Link href={"/query/comedy"}>
                    <h1>Comedy</h1>
                  </Link>
                  <br />
                  <Link href={"/query/hollywood"}>
                    <h1>Hollywood</h1>
                  </Link>
                  <br />
                </div>
                <div className="block">
                  <Link href={"/query/technologies"}>
                    <h1>Technologies</h1>
                  </Link>
                  <br />
                  <Link href={"/query/health"}>
                    <h1>Health</h1>
                  </Link>
                  <br />
                  <Link href={"/query/family"}>
                    <h1>Family</h1>
                  </Link>
                  <br />
                  <Link href={"/query/dieat"}>
                    <h1>Dieat</h1>
                  </Link>
                  <br />
                  <Link href={"/query/politics"}>
                    <h1>Politics</h1>
                  </Link>
                  <br />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <hr />
        <div className="mt-1 text-white flex flex-col justify-center text-center w-full">
          <h1>@2023 Enews</h1>
          <h1>All Rights Reserved</h1>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
