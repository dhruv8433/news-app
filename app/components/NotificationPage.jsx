import Lottie from "lottie-react";
import React from "react";
import noNotification from "@/app/animation/no-notification.json";

const NotificationPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[466px]">
        {/* If no notification found for a particular user */}
        <Lottie animationData={noNotification} />
      </div>
    </div>
  );
};

export default NotificationPage;
