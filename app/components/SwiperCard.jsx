"use client";
import Link from "next/link";
import React from "react";
import slugify from "slugify";

const SwiperCard = ({ news, careerNews }) => {
  console.log("News Got...", news);
  return (
    <div>
      <div className="card">
        {careerNews
          ? news.slice(0, 9).map((articale) => newsCard(articale))
          : news
              .slice(0, 10) // Consider only the first 10 elements of the array
              .sort(() => Math.random() - 0.5) // Shuffle the array randomly
              .slice(0, 3) // Select the first 3 elements after shuffling
              .map((article) => newsCard(article))}
      </div>
    </div>
  );
};

export default SwiperCard;

const newsCard = (article) => {
  const saveDetails = (art) => {
    localStorage.setItem("details", JSON.stringify(art));
  };
  return (
    <div className="px-3 py-1" key={article.url}>
      <Link
        href={"/categorys/" + slugify(article.title).toLowerCase()}
        onClick={() => saveDetails(article)}
      >
        <div className="h-[200px] rounded overflow-hidden">
          <img
            className="object-cover h-full w-full hover:h-[220px]"
            src={article.urlToImage}
            alt=""
          />
          <div className="bottom-0 -mt-20 left-0 right-0 p-4">
            <p className="text-sm text-white">{article.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
