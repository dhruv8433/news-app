"use client";

import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getSpecificQueryNews } from "../Services/getAllNews";
import Heading from "./Heading";
import PopularCard from "./PopularCard";
import { CardSkeleton } from "./Skeleton";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const PopularNews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const isOnline = navigator.onLine;

  async function getPopularNews() {
    if (isOnline) {
      try {
        const response = await getSpecificQueryNews("popular");
        if (response.articles) {
          try {
            response.articles.forEach(async (article) => {
              await addDoc(collection(db, "popular"), article);
            });
            console.log("Popular added to Firestore");
          } catch (error) {
            console.log("error in store db", error);
          }
        }
        setData(response.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      const querySnapshot = await getDocs(collection(db, "popular"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data());
      });
      setLoading(false);
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
