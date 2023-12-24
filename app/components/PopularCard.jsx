import Link from "next/link";
import React from "react";
import slugify from "slugify";

const PopularCard = ({ article, edu }) => {
  const saveDetails = (art) => {
    localStorage.setItem("details", JSON.stringify(art));
  };

  return (
    <div>
      <div className="px-3 py-1">
        <Link
          href={"/categorys/" + slugify(article.title).toLowerCase()}
          onClick={() => saveDetails(article)}
        >
          {!edu ? (
            <div className="trending absolute bg-red-500 text-white p-1 rounded mt-1 ml-1">
              <p>trending</p>
            </div>
          ) : (
            ""
          )}
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
