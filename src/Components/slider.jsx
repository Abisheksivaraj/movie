import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ayalaan from "../assets/Slideer-images/ayalaan.jpg";
import captainmiller from "../assets/Slideer-images/captainmiller.jpg";
import joe from "../assets/Slideer-images/joee.jpg";
import leo from "../assets/Slideer-images/leo.webp";
import salar from "../assets/Slideer-images/salaar.jpg";
import hinana from "../assets/Slideer-images/hi.png";
import fastx from "../assets/Slideer-images/fast x.webp";
import moneyheist from "../assets/Slideer-images/moneyheist.webp";
import parking from "../assets/Slideer-images/parking.webp";
import japan from "../assets/Slideer-images/japan.jpg";

const images = [
  ayalaan,
  captainmiller,
  leo,
  joe,
  parking,
  hinana,
  moneyheist,
  fastx,
  salar,
];

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="slider-container">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2000}
        autoPlay={true}
      >
        <div className="relative">
          <img
            src={ayalaan}
            alt=""
            className=" h-[500px] rounded-lg  w-screen hover:scale-[1.3]  transition duration-[400ms]"
          />
        </div>

        <div className="relative ">
          <img
            src={captainmiller}
            alt=""
            className="w-screen h-[500px] rounded-lg hover:scale-[1.3]  transition duration-[400ms] "
          />
        </div>

        <div className="relative">
          <img
            src={japan}
            alt=""
            className="w-screen h-[500px] rounded-lg hover:scale-[1.3]  transition duration-[400ms] "
          />
        </div>

        <div className="relative ">
          <img
            src={leo}
            alt=""
            className="w-screen h-[500px] rounded-lg hover:scale-[1.3]  transition duration-[400ms] "
          />
        </div>

        <div className="relative ">
          <img
            src={joe}
            alt=""
            className="w-screen h-[500px] rounded-lg hover:scale-[1.3]  transition duration-[400ms] "
          />
        </div>

        <div className="relative ">
          <img
            src={parking}
            alt=""
            className="w-screen h-[500px] rounded-lg hover:scale-[1.3]  transition duration-[400ms] "
          />
        </div>

        <div className="relative ">
          <img
            src={hinana}
            alt=""
            className="w-screen h-[500px] rounded-lg hover:scale-[1.3]  transition duration-[400ms]"
          />
        </div>

        <div className="relative">
          <img
            src={moneyheist}
            alt=""
            className="w-screen h-[500px] rounded-lg hover:scale-[1.3]  transition duration-[400ms]"
          />
        </div>

        <div className="relative ">
          <img
            src={fastx}
            alt=""
            className="w-screen h-[500px] rounded-lg hover:scale-[1.3]  transition duration-[400ms]"
          />
        </div>

        <div className="relative ">
          <img
            src={salar}
            alt=""
            className="w-screen h-[500px] rounded-lg hover:scale-[1.3]  transition duration-[400ms]"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
