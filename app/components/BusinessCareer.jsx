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

  // for skeletons
  const [loading, setLoading] = useState(true);
  const [businessLoading, setBusinessLoading] = useState(true);

  // to check whether user is online or not
  const isOnlined = navigator.onLine;

  async function careerNews() {
    // if user is online then send request to api
    if (isOnlined) {
      try {
        console.log("inside try")
        const response = await getSpecificQueryNews("career");
        const business = await getSpecificQueryNews("business");
        
        console.log("response got", response.docs)
        console.log("business", business);
        console.log("response", response);

        setData(response.docs);
        setBusiness(business.docs);

        // response store in firestore so when user is offline we got data from there
        if (response.docs && business.docs) {
          try {
            response.docs.forEach(async (article) => {
              await addDoc(collection(db, "career"), article);
            });
            business.docs.forEach(async (article) => {
              await addDoc(collection(db, "business"), article);
            });
            console.log("Career & Business added to Firestore");
          } catch (error) {
            console.log("error in store db", error);
          }
        }

        setLoading(false);
        setBusinessLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      // else getting data from cache(firestore)
      const careerData = await getDocs(collection(db, "career"));
      const careerDocs = [];
      careerData.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        careerDocs.push(doc.data());
      });
      setData(careerDocs);

      const businessData = await getDocs(collection(db, "business"));
      const businessDocs = [];
      businessData.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        businessDocs.push(doc.data());
      });
      setBusiness(businessDocs);

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
            {/* business card skeletons */}
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
            {/* small card skeletons  */}
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
