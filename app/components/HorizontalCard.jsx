import { FavoriteBorder } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";
import { addFavorite, removeFavorite } from "../action/action";
import toast from "react-hot-toast";

// reusable Horizontal Card
const HorizontalCard = ({ data, profilePage }) => {
  const saveDetails = (art) => {
    localStorage.setItem("details", JSON.stringify(art));
  };

  const dispatch = useDispatch();

  // remove any favorites
  function RemoveFromFav(art) {
    console.log("Removed", art);
    try {
      dispatch(removeFavorite(art));
      toast.success("Article removed successfully");
    } catch (error) {
      console.log("Error", error);
    }
  }

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // select fav from redux
  const favItems = useSelector((state) => state.fav.items);

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
      {data.slice(0, 5).map((article) => (
        <>
          {/* if it doesn't a profile page than only this add fav btn visible */}
          {!profilePage ? (
            <div
              className={`like absolute ml-2 mt-2 border bg-white rounded-full`}
            >
              <IconButton onClick={() => addToLike(article)}>
                <FavoriteBorder />
              </IconButton>
            </div>
          ) : (
            ""
          )}
          <Link
            key={article.title}
            href={"/categorys/" + slugify(article.title).toLowerCase()}
            onClick={() => saveDetails(article)}
          >
            <Card
              sx={{ display: { xs: "block", md: "flex" } }}
              className="justify-between my-4"
            >
              <CardMedia className="w-1/4 h-48">
                <Box
                  sx={{ width: { xs: "400px", md: "200px" } }}
                  className="h-full"
                >
                  <img
                    src={article.image}
                    alt=""
                    className="object-cover h-full"
                    height={"100%"}
                    width={"100%"}
                  />
                </Box>
              </CardMedia>
              <CardContent className="w-full">
                <div className="text-start ml-3">
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
          {/* inside profile page we give remove fav btn that remove any article from favoritesF */}
          {profilePage ? (
            <div className="flex justify-end mr-2 -mt-14">
              <button
                className="hover:bg-red-500 hover:text-white px-2 py-1 border border-gray-300 rounded"
                onClick={() => RemoveFromFav(article)}
              >
                Remove
              </button>
            </div>
          ) : (
            ""
          )}
        </>
      ))}
    </div>
  );
};

export default HorizontalCard;
