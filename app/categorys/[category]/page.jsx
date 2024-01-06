"use client";

import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  console.log(params.category);

  const [article, setArticle] = useState([]);

  useEffect(() => {
    // for detailed page we getting data from our local storageF and set into useState
    const data = localStorage.getItem("details");
    const jsonData = JSON.parse(data);
    setArticle(jsonData);
  }, []);

  return (
    <div className="my-4">
      <Container>
        <div className="h-[500px]">
          <img
            className="object-cover h-full w-full rounded"
            src={article.image}
            alt=""
          />
        </div>
        <div className="my-3">
          <p className="text-3xl font-bold text-red-500">{article.title}</p>
          {/* <p className="text-xl">
            Author:
            {article.authors.map((auth) => (
              <span key={auth.email} className="font-bold p-1 bg-red-500 rounded text-white">
                auth.name
              </span>
            ))}
          </p> */}
          <p className="text-xl mt-2">
            Published At : <span className="font-bold rounded p-1 text-white bg-red-500">{article.date}</span>{" "}
          </p>
          <p className="text-sm italic mt-4">{article.body} </p>

          <p className="mt-3">
            For more information visit :{" "}
            <a href={article.url} className="text-blue-500 underline">
              {article.url}
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default page;
