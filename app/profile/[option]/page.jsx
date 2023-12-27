"use client";

import ProfileLeft from "@/app/components/ProfileLeft";
import { Grid } from "@mui/material";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import React from "react";
import Heading from "@/app/components/Heading";
import Lottie from "lottie-react";
import noNotification from "@/app/animation/no-notification-1.json";

const page = () => {
  // we getting parameters from params
  const { option } = useParams();
  console.log(option);

  // if it's notification page than do this thing
  const route = useRouter();
  if (option === "notifications") {
    return (
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <ProfileLeft />
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="ml-4 my-5 p-2 border min-h-[600px] border-red-500">
              <Heading content={"Notifications"} />
              <div className="flex justify-center items-center h-[466px]">
                {/* If no notification found for a particular user */}
                <Lottie animationData={noNotification} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    // else redirect back to profile page or if any user try to misspelled notification spelling redirect back
    route.push("/profile");
  }
};

export default page;
