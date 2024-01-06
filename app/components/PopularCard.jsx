// Large Article Cards

import { FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";
import { addFavorite } from "../action/action";

const PopularCard = ({ article, edu }) => {

  const saveDetails = (art) => {
    localStorage.setItem("details", JSON.stringify(art));
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // select fav from redux
  const favItems = useSelector((state) => state.fav.items);

  const dispatch = useDispatch();

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
    <div>
      <div className="px-3 py-1">
        <div className={`like absolute ml-2 mt-2 border bg-white rounded-full`}>
          <IconButton onClick={() => addToLike(article)}>
            <FavoriteBorder />
          </IconButton>
        </div>

        {/* when we reuse in education component no need to trending tag */}
        {!edu ? (
          <div className="trending absolute bg-red-500 text-white p-1 rounded mt-3 ml-44">
            <p>trending</p>
          </div>
        ) : (
          ""
        )}

        {/* link for detailed page */}
        <Link
          href={"/categorys/" + slugify(article.title).toLowerCase()}
          onClick={() => saveDetails(article)}
        >
          <>
            <div className="h-[400px] rounded overflow-hidden">
              <img
                className="object-cover h-full w-full hover:h-[420px]"
                src={article.image}
                alt=""
              />
              <div className="bottom-0 -mt-20 left-0 right-0 p-4">
                <p className="text-sm text-white">{article.title}</p>
              </div>
            </div>
          </>
        </Link>
      </div>
    </div>
  );
};

export default PopularCard;
