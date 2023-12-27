"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import React from "react";
import { useSelector } from "react-redux";

import Heading from "../components/Heading";
import HorizontalCard from "../components/HorizontalCard";
import ProfileLeft from "../components/ProfileLeft";
import Lottie from "lottie-react";
import noFav from "@/app/animation/no-fav.json";
import Link from "next/link";

const page = () => {
  // select favs from redux
  const favorites = useSelector((state) => state.fav.items);

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <ProfileLeft />
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="ml-4 my-5 p-2 border min-h-[600px] border-red-500">
              <Heading content={"Favourite"} />
              {favorites.length > 0 ? (
                <GridContainerCards article={favorites} />
              ) : (
                <div className="flex flex-col justify-center items-center h-[466px]">
                  {/* If no fav found for a particular user */}
                  <Lottie animationData={noFav} style={{ height: 300 }} />
                  <h1 className="text-xl">No Favorites Found!</h1>
                  <Link href={"/"}>
                    <button
                      className="border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white
                    "
                    >
                      Add Favorites
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default page;

const GridContainerCards = ({ article }) => {
  return (
    <Grid container>
      {article.map(() => (
        <HorizontalCard data={article} profilePage={true} />
      ))}
    </Grid>
  );
};
