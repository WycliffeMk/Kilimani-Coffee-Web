import React from "react";
import ReviewCard from "../layouts/ReveiwCard";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor ">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 ">
        Customer's Reviews
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard img="public/images/pic1.png" title="Olivia Ava" />
        <ReviewCard img="public/images/pic2.png" title="John Deo" />
        <ReviewCard img="public/images/pic3.png" title="Sofia Zoe" />
      </div>
    </div>
  )
};

export default Review;