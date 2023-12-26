"use client";

import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { Grid } from "@mui/material";
import { getSpecificQueryNews } from "../Services/getAllNews";
import PopularCard from "./PopularCard";
import { CardSkeleton } from "./Skeleton";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const EducationComponent = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  const isOnline = navigator.onLine;

  async function getEducationNews() {
    if (isOnline) {
      try {
        const education = await getSpecificQueryNews("education");
        if (education.articles) {
          try {
            education.articles.forEach(async (article) => {
              await addDoc(collection(db, "edu"), article);
            });
            console.log("Edu added to Firestore");
          } catch (error) {
            console.log("error in store db", error);
          }
        }
        setEducation(education.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }else {
      const querySnapshot = await getDocs(collection(db, "edu"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        education.push(doc.data());
      });
      setLoading(false);
    }
  }

  useEffect(() => {
    getEducationNews();
  }, []);
  return (
    <div>
      <Heading content={"Education"} />
      <Grid container>
        {loading ? (
          <>
            <SkeletonContainer />
          </>
        ) : (
          education.slice(0, 6).map((edu) => (
            <Grid item key={edu.title} xs={12} md={4}>
              <PopularCard article={edu} edu={true} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default EducationComponent;

const SkeletonContainer = () => {
  return (
    <>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSkeleton height={400} />
      </Grid>
    </>
  );
};
