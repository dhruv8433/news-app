"use client";

import SpecificCategoryPage from "@/app/components/SpecificCategoryPage";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  // we getting query params from url
  const { query } = useParams();
  console.log(query);
  
  // based on query params we return the specific page
  return <SpecificCategoryPage query={query} />;
};

export default page;
