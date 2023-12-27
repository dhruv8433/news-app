import Lottie from "lottie-react";
import React from "react";
import noNotification from "@/app/animation/no-notification.json";

// Dummy notification page
const NotificationPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[466px]">
        <Lottie animationData={noNotification} />
      </div>
    </div>
  );
};

export default NotificationPage;
