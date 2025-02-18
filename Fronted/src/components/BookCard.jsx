import React from "react";
import Card from "./Card"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";


const filterData = list.filter((data)=> data.category === "Free");

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  pauseOnFocus: true,
  adaptiveHeight: true,
  centerMode: false, // Disabled by default
  responsive: [
    {
      breakpoint: 1024, // Tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false, // Disabled to avoid overlap
      },
    },
    {
      breakpoint: 768, // Mobile screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
      },
    },
  ],
};

const BookCard = () => {
  return (
    <>
    <div className=" md:m-12">
      {/* Heading */}
      <div className="mb-4 my-2 ml-2 md:ml-16">
        <p className="font-bold text-2xl md:text-4xl md:my-4 md:text-start">
          Free Offered Courses Book
        </p>
        <p className="my-2 md:text-start text-gray-700">
          "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
        </p>
      </div>

      {/* Carousel Section */}
      

    <Slider {...settings} className="z-10">
      {filterData.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </Slider>
      </div>
    </>
  );
};

export default BookCard;
