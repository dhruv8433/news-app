"use client";
import React, { useEffect, useState } from "react";
import { getHeadlines } from "../Services/getHeadlines";
import { Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import SwiperCard from "./SwiperCard";
import NewsSwiperSlide from "./NewsSwiperSlide";
import { SwiperSkeleton, CardSkeleton } from "./Skeleton";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { isOnline } from "../config/config";

const SwiperSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const isOnline = navigator.onLine;
  
  async function getTopHeadlines() {
    if (isOnline) {
      try {
        const response = await getHeadlines();
        setData(response.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      const querySnapshot = await getDocs(collection(db, "headlines"));
      setLoading(false);
      console.log("q", querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data());
      });
    }
  }

  useEffect(() => {
    getTopHeadlines();
  }, []);

  return (
    <Container>
      <div className="mt-10 rounded-md">
        {loading ? (
          <SwiperSkeleton />
        ) : (
          <Grid container spacing={1}>
            <Grid item xs={12} md={9}>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[624px] rounded-md"
              >
                {data &&
                  data.map((article, index) => {
                    if (article.title !== "[Removed]")
                      return (
                        <SwiperSlide key={index}>
                          <NewsSwiperSlide article={article} />
                        </SwiperSlide>
                      );
                  })}
              </Swiper>
            </Grid>
            <Grid item xs={12} md={3}>
              <SwiperCard news={data} careerNews={false} />
            </Grid>
          </Grid>
        )}
      </div>
    </Container>
  );
};

export default SwiperSection;
