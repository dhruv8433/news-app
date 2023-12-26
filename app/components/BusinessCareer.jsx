"use client";

import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import SwiperCard from "./SwiperCard";
import { getSpecificQueryNews } from "../Services/getAllNews";
import HorizontalCard from "./HorizontalCard";
import EducationComponent from "./EducationComponent";
import { CardSkeleton, HorizontalCardSkeleton } from "./Skeleton";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const BusinessCareer = () => {
  const [data, setData] = useState([]);
  const [business, setBusiness] = useState([]);

  const [loading, setLoading] = useState(true);
  const [businessLoading, setBusinessLoading] = useState(true);

  const isOnlined = navigator.onLine;

  async function careerNews() {
    if (isOnlined) {
      try {
        const response = await getSpecificQueryNews("career");
        const business = await getSpecificQueryNews("business");
        setData(response.articles);
        setLoading(false);
        setBusiness(business.articles);
        if (response.articles && business.articles) {
          try {
            response.articles.forEach(async (article) => {
              await addDoc(collection(db, "career"), article);
            });
            business.articles.forEach(async (article) => {
              await addDoc(collection(db, "business"), article);
            });
            console.log("Career & Business added to Firestore");
          } catch (error) {
            console.log("error in store db", error);
          }
        }
        setBusinessLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      const careerData = await getDocs(collection(db, "career"));
      careerData.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data());
      });
      const businessData = await getDocs(collection(db, "business"));
      businessData.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        business.push(doc.data());
      });
      setLoading(false);
      setBusinessLoading(false);
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
              <HorizontalCard data={business} profilePage={false} />
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
