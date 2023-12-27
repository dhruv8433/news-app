"use client";

import { Container } from "@mui/material";
import React from "react";
import { categorys } from "../config/config";
import Link from "next/link";

const ListCategoryContainer = () => {
  return (
    <Container className="mt-4">
      <marquee behavior="alternative" direction="left">
        <div className="flex">
          {/* so basically, it is all categorys and on any category click it will redirect us to news section page */}
          {categorys.map((response) => (
            <Link key={response} href={`/query/${response.toLowerCase()}`}>
              <h1 className="border border-black rounded mx-3 px-2 py-1 hover:bg-red-600 hover:text-white cursor-pointer">
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
