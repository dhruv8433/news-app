import Link from "next/link";
import React from "react";
import slugify from "slugify";

// reusable swiper slides component
const NewsSwiperSlide = ({ article }) => {
  // when user clicks on any slide it stores the data of slide into local storage for detailed view
  const saveDetails = (art) => {
    localStorage.setItem("details", JSON.stringify(art));
  };

  const imageUrl = article.multimedia && article.multimedia.length > 0
  ? "https://www.nytimes.com/" + article.multimedia[0].url
  : "";

  return (
    <div className="h-full">
      <Link
        href={"/categorys/" + slugify(article.abstract).toLowerCase()}
        onClick={() => saveDetails(article)}
      >
        <img
          className="object-cover h-full w-full"
          src={imageUrl}
          alt=""
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
          <h1 className="text-3xl text-white">{article.abstract}</h1>
        </div>
      </Link>
    </div>
  );
};

export default NewsSwiperSlide;
