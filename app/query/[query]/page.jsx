"use client";

import SpecificCategoryPage from "@/app/components/SpecificCategoryPage";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { query } = useParams();
  console.log(query);
    return <SpecificCategoryPage query={query} />;
};

export default page;
