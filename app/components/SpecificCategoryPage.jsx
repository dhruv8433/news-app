"use client";

import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import PopularCard from "../components/PopularCard";
import { getSpecificQueryNews } from "../Services/getAllNews";
import { Grid } from "@mui/material";
import CardSkeleton from "./Skeleton";

const SpecificCategoryPage = ({ query }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getNews() {
    try {
      const response = await getSpecificQueryNews(query);
      setData(response.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);
  return (
    <Container>
      <Heading content={query} />
      <Grid container>
        {loading ? (
          <SkeletonContainer />
        ) : (
          data.slice(0, 20).map((article) => {
            return (
              <Grid item key={article.title} xs={12} md={4}>
                <PopularCard article={article} edu={true} />
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};

export default SpecificCategoryPage;

const SkeletonContainer = () => {
  return (
    <>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
    </>
  );
};
