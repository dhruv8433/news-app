import { Card, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";
import React from "react";
import slugify from "slugify";

const HorizontalCard = ({ data }) => {
  const saveDetails = (art) => {
    localStorage.setItem("details", JSON.stringify(art));
  };
  return (
    <div>
      {data.slice(0, 5).map((article) => (
        <Link
          href={"/categorys/" + slugify(article.title).toLowerCase()}
          onClick={() => saveDetails(article)}
        >
          <Card className="flex justify-between my-4">
            <CardMedia className="w-1/4 h-48">
              <div className="w-[200px] h-full">
                <img
                  src={article.urlToImage}
                  alt=""
                  className="object-cover h-full"
                  height={"100%"}
                  width={"100%"}
                />
              </div>
            </CardMedia>
            <CardContent className="w-full">
              <div className="text-start">
                <h1 className="hover:text-red-500 font-semibold">
                  {article.title}
                </h1>
                <h1 className="hover:text-red-300 text-sm">
                  {article.description}
                </h1>
                {article.author ? (
                  <h1 className="text-sm mt-1 ">
                    Discovered By:{" "}
                    <span className="bg-red-500 w-max p-1 hover:text-white rounded">
                      {article.author}
                    </span>
                  </h1>
                ) : (
                  ""
                )}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCard;
