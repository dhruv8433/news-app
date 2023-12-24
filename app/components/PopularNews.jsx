"use client";

import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getSpecificQueryNews } from "../Services/getAllNews";
import Heading from "./Heading";
import PopularCard from "./PopularCard";
import { CardSkeleton } from "./Skeleton";

const PopularNews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPopularNews() {
    try {
      const response = await getSpecificQueryNews("popular");
      console.log("popular", response);
      setData(response.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPopularNews();
  }, []);
  return (
    <div className="mt-4">
      <Container>
        <Heading content={"Popular News"} />
        <div className="">
          <Grid container>
            {loading ? (
              <SkeletonContainer />
            ) : (
              data &&
              data.slice(0, 8).map((article) => {
                if (article.title && article.urlToImage)
                  return (
                    <Grid item xs={12} md={3} key={article.url}>
                      <PopularCard article={article} edu={false} />
                    </Grid>
                  );
              })
            )}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default PopularNews;

const SkeletonContainer = () => {
  return (
    <>
      <Grid item xs={12} md={3}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardSkeleton height={400} />
      </Grid>
    </>
  );
};
