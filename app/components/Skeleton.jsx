import { Card, CardContent, CardMedia, Grid, Skeleton } from "@mui/material";
import React from "react";

export const SwiperSkeleton = () => {
  return (
    <Grid container>
      {/* Main container with specified size */}
      <Grid item xs={12} md={9} style={{ maxWidth: "100%", height: "620px" }}>
        {/* Skeleton representing the main content */}
        <Skeleton variant="rectangular" height="100%" width="100%" />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardSkeleton height={200} />
        <CardSkeleton height={200} />
        <CardSkeleton height={200} />
      </Grid>
    </Grid>
  );
};

export const CardSkeleton = ({ height }) => {
  return (
    <div className="px-3 py-1">
      <Skeleton variant="rectangular" width={"100%"} height={height}>
        <div className="h-[200px] rounded overflow-hidden">
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
          <div className="bottom-0 -mt-20 left-0 right-0 p-4">
            <Skeleton variant="text" width={"80%"} height={"10%"} />
          </div>
        </div>
      </Skeleton>
    </div>
  );
};

export const HorizontalCardSkeleton = () => {
  return (
    <Card className="flex justify-between my-4">
      <CardMedia className="w-1/4 h-48">
        <Skeleton variant="rectangular" width={200} height={200} />
      </CardMedia>
      <CardContent className="w-full">
        <div className="text-start">
          <Skeleton variant="text" width={300} height={30} />
          <Skeleton variant="text" width={250} height={20} />
          <Skeleton variant="text" width={150} height={15} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardSkeleton;
