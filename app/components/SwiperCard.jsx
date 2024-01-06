// small cards

"use client";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";
import { addFavorite } from "../action/action";
import toast from "react-hot-toast";

const SwiperCard = ({ news, careerNews }) => {
  
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

// small card component
const newsCard = (article) => {
  const saveDetails = (art) => {
    localStorage.setItem("details", JSON.stringify(art));
  };

  // select fav from redux
  const favItems = useSelector((state) => state.fav.items);
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // when user click like button
  async function addToLike(data) {
    if (isAuthenticated) {
      try {
        const isAlreadyLiked = favItems.some(
          (item) => item.title === data.title
        );
        // check whether artiley is already in fav or not
        if (isAlreadyLiked) {
          toast.error("Article already in favorites");
        } else {
          const response = dispatch(addFavorite(data));
          toast.success("Article added to favorites");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please login first");
    }
  }

  return (
    <div className="px-3 py-1" key={article.url}>
      <div className={`like absolute ml-2 mt-2 border bg-white rounded-full`}>
        {/* checkbox for like btn */}
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={
            isAuthenticated ? (
              <Favorite />
            ) : (
              <FavoriteBorder sx={{ color: "gray" }} />
            )
          }
          onClick={() => addToLike(article)}
        />
      </div>
      <Link
        href={"/categorys/" + slugify(article.title).toLowerCase()}
        onClick={() => saveDetails(article)}
      >
        <div className="h-[200px] rounded overflow-hidden">
          <img
            className="object-cover h-full w-full hover:h-[220px]"
            src={article.image}
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
