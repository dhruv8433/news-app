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

const SwiperSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getTopHeadlines() {
    try {
      const response = await getHeadlines();
      setData(response.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTopHeadlines();
  }, []);

  return (
    <Container>
      <div className="mt-10 rounded-md">
        <Grid container spacing={1}>
          <Grid item xs={12} md={9}>
            {loading ? (
              <SwiperSkeleton />
            ) : (
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
            )}
          </Grid>
          <Grid item xs={12} md={3}>
            {loading ? (
              <>
                <CardSkeleton height={200} />
                <CardSkeleton height={200} />
                <CardSkeleton height={200} />
              </>
            ) : (
              <SwiperCard news={data} careerNews={false} />
            )}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default SwiperSection;
