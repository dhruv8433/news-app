"use client";
import React, { useEffect, useState } from "react";
import { getHeadlines } from "../Services/getHeadlines";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const SwiperSection = () => {
  const [data, setData] = useState([]);

  async function getTopHeadlines() {
    try {
      const response = await getHeadlines();
      setData(response.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTopHeadlines();
  }, []);

  return (
    <Container>
      <div className="mt-4 rounded-md">
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
          className="mySwiper h-[600px] rounded-md"
        >
          {data &&
            data.map((article, index) => {
              if (article.title !== "[Removed]")
                return (
                  <SwiperSlide key={index}>
                    <div className="">
                      <Link href={article.url}>
                        <img
                          className="object-cover h-min w-full"
                          src={article.urlToImage}
                          alt=""
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                          <h1 className="text-3xl text-white">
                            {article.title}
                          </h1>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
            })}
        </Swiper>
      </div>
    </Container>
  );
};

export default SwiperSection;
