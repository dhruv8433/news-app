"use client";

import React, { useState } from "react";
import Swiper from "./components/Swiper";
import PopularNews from "./components/PopularNews";
import ListCategoryContainer from "./components/ListContainer";
import BusinessCareer from "./components/BusinessCareer";
import { title } from "./config/config";

export default function Home() {
  document.title = `Home | ${title}`;
  return (
    <div>
      <Swiper />
      <ListCategoryContainer />
      <PopularNews />
      {/* <BusinessCareer /> */}
    </div>
  );
}
