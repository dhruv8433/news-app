"use client";

import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import SwiperCard from "./SwiperCard";
import { getSpecificQueryNews } from "../Services/getAllNews";
import HorizontalCard from "./HorizontalCard";
import EducationComponent from "./EducationComponent";
import { CardSkeleton, HorizontalCardSkeleton } from "./Skeleton";

const BusinessCareer = () => {
  const [data, setData] = useState([]);
  const [business, setBusiness] = useState([]);

  const [loading, setLoading] = useState(true);
  const [businessLoading, setBusinessLoading] = useState(true);

  async function careerNews() {
    try {
      const response = await getSpecificQueryNews("career");
      const business = await getSpecificQueryNews("business");
      setData(response.articles);
      setLoading(false);
      setBusiness(business.articles);
      setBusinessLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    careerNews();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <div className="">
            <Heading content={"Business"} />
            {businessLoading ? (
              <>
                <HorizontalCardSkeleton />
                <HorizontalCardSkeleton />
                <HorizontalCardSkeleton />
                <HorizontalCardSkeleton />
                <HorizontalCardSkeleton />
                <HorizontalCardSkeleton />
              </>
            ) : (
              <HorizontalCard data={business} />
            )}

            <EducationComponent />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="">
            <Heading content={"Career"} />
            {loading ? (
              <>
                <CardSkeleton height={200} />
                <CardSkeleton height={200} />
                <CardSkeleton height={200} />
                <CardSkeleton height={200} />
                <CardSkeleton height={200} />
                <CardSkeleton height={200} />
                <CardSkeleton height={200} />
                <CardSkeleton height={200} />
              </>
            ) : (
              <SwiperCard news={data} careerNews={true} />
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BusinessCareer;
