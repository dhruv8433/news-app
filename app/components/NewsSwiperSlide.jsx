import Link from "next/link";
import React from "react";
import slugify from "slugify";

// reusable swiper slides component
const NewsSwiperSlide = ({ article }) => {
  // when user clicks on any slide it stores the data of slide into local storage for detailed view
  const saveDetails = (art) => {
    localStorage.setItem("details", JSON.stringify(art));
  };
  return (
    <div className="h-full">
      <Link
        href={"/categorys/" + slugify(article.title).toLowerCase()}
        onClick={() => saveDetails(article)}
      >
        <img
          className="object-cover h-full w-full"
          src={article.image}
          alt=""
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
          <h1 className="text-3xl text-white">{article.title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default NewsSwiperSlide;
