"use client";

import React, { useState } from "react";
import Swiper from "./components/Swiper";
import GridNewsContainer from "./components/GridNewsContainer";

export default function Home() {
  return (
    <div>
      <Swiper />
      <GridNewsContainer />
    </div>
  );
}
