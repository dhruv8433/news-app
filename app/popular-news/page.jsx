import React from "react";
import SpecificCategoryPage from "../components/SpecificCategoryPage";
import { title } from "../config/config";

export const metadata = {
  title: `Popular | ${title}`,
};

const page = () => {
  // this return a specific category page wuth popular news
  return <SpecificCategoryPage query={"popular"} />;
};

export default page;
