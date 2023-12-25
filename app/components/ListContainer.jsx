"use client";
import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getSpecificQueryNews } from "../Services/getAllNews";
import { categorys } from "../config/config";
import Link from "next/link";

const ListCategoryContainer = () => {
  // use this category for further use when load another specific category page
  const [query, setQuery] = useState("");

  async function getNews(category) {
    try {
      const response = await getSpecificQueryNews(category);
      console.log("technology : ", response);
      setQuery(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function getParticularNews(resposne) {
    getNews(response);
  }

  useEffect(() => {
    getNews();
  }, []);
  return (
    <Container className="mt-4">
      <marquee
        behavior="alternative"  
        direction="left"
      >
        <div className="flex">
          {categorys.map((response) => (
            <Link key={response} href={`/query/${response.toLowerCase()}`}>
              <h1
                className="border border-black rounded mx-3 px-2 py-1 hover:bg-red-600 hover:text-white cursor-pointer"
                onClick={() => getParticularNews(response)}
              >
                {response}
              </h1>
            </Link>
          ))}
        </div>
      </marquee>
    </Container>
  );
};

export default ListCategoryContainer;
