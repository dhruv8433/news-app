"use client";

import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { Grid } from "@mui/material";
import { getSpecificQueryNews } from "../Services/getAllNews";
import PopularCard from "./PopularCard";
import { CardSkeleton } from "./Skeleton";

const EducationComponent = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getEducationNews() {
    try {
      const education = await getSpecificQueryNews("education");
      setEducation(education.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEducationNews();
  }, []);
  return (
    <div>
      <Heading content={"Education"} />
      <Grid container>
        {loading ? (
          <>
            <SkeletonContainer />
          </>
        ) : (
          education.slice(0, 6).map((edu) => (
            <Grid item key={edu.title} xs={12} md={4}>
              <PopularCard article={edu} edu={true} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default EducationComponent;

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
    </>
  );
};
