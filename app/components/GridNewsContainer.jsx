"use client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getSpecificQueryNews } from "../Services/getAllNews";

const GridNewsContainer = () => {
  const [query, setQuery] = useState("");

  async function getNews() {
    try {
      const response = await getSpecificQueryNews("technology");
      console.log("technology : ", response);
      setQuery(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div>
      <Grid container>
        <div className="">This is Div</div>
      </Grid>
    </div>
  );
};

export default GridNewsContainer;
