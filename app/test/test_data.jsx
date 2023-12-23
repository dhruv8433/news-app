"use client";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import Swiper from "./components/Swiper";

async function addDataToFirestore(name, email, password) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      password: password,
    });
    console.log("doc id", docRef.id);
  } catch (error) {
    console.log(error);
  }
}
export default function Home() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFirestore(
      userData.name,
      userData.email,
      userData.password
    );

    if (added) {
      setUserData({
        name: "",
        email: "",
        password: "",
      });

      alert("completed");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <h1 className="text-blue-600">Hello Firebase</h1>
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            type="text"
            name=""
            id=""
            value={userData.name}
            onChange={(e) => setUserData({ name: e.target.value })}
            placeholder="enter name"
          />
          <input
            type="text"
            name=""
            id=""
            value={userData.email}
            onChange={(e) => setUserData({ email: e.target.value })}
            placeholder="enter email"
          />
          <input
            type="text"
            name=""
            id=""
            value={userData.password}
            onChange={(e) => setUserData({ password: e.target.value })}
            placeholder="enter password"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <Swiper />
    </div>
  );
}
