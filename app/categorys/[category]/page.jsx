"use client";

import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  console.log(params.category);

  const [article, setArticle] = useState([]);

  useEffect(() => {
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
            src={article.urlToImage}
            alt=""
          />
        </div>
        <div className="my-3">
          <p className="text-3xl font-bold">{article.title}</p>
          <p className="text-xl">
            Author:{" "}
            <span className="font-bold p-1 bg-red-500 rounded text-white">
              {article.author}
            </span>{" "}
          </p>
          <p className="text-xl">
            Published At :{" "}
            <span className="font-bold ">{article.publishedAt}</span>{" "}
          </p>
          <p className="text-sm">{article.description} </p>

          <p>
            For more information visit : <a href={article.url} className="text-blue-500 underline">{article.url}</a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default page;
