import { FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import slugify from "slugify";

const PopularCard = ({ article, edu }) => {
  console.log("article", article);

  const saveDetails = (art) => {
    localStorage.setItem("details", JSON.stringify(art));
  };

  return (
    <div>
      <div className="px-3 py-1">
        <div className={`like absolute ml-2 mt-2 border bg-white rounded-full`}>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </div>
        {!edu ? (
          <div className="trending absolute bg-red-500 text-white p-1 rounded mt-3 ml-44">
            <p>trending</p>
          </div>
        ) : (
          ""
        )}
        <Link
          href={"/categorys/" + slugify(article.title).toLowerCase()}
          onClick={() => saveDetails(article)}
        >
          <>
            <div className="h-[400px] rounded overflow-hidden">
              <img
                className="object-cover h-full w-full hover:h-[420px]"
                src={article.urlToImage}
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
