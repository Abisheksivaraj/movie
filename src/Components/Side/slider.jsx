import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ayalaan from "../../assets/Slideer-images/ayalaan.jpg";
import captainmiller from "../../assets/Slideer-images/captainmiller.jpg";
import joe from "../../assets/Slideer-images/joee.jpg";
import leo from "../../assets/Slideer-images/leo.webp";
import salar from "../../assets/Slideer-images/salaar.jpg";
import hinana from "../../assets/Slideer-images/hi.png";
import fastx from "../../assets/Slideer-images/fast x.webp";
import moneyheist from "../../assets/Slideer-images/moneyheist.webp";
import parking from "../../assets/Slideer-images/parking.webp";
import japan from "../../assets/Slideer-images/japan.jpg";

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
    <div className="slider-container absolute top-[7rem] w-[70rem] left-[7rem]">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2000}
        autoPlay={false}
      >
        <div className="w-full h-full relative z-0">
          <a href="https://www.youtube.com/watch?v=kNpwAxnjbNA">
            <img
              src={ayalaan}
              alt=""
              className="h-[455px] rounded-lg  w-screen hover:scale-[1.3]  transition duration-[400ms] cursor-pointer"
            />
          </a>

          <div className="absolute top-[5rem] left-[1rem] w-full h-[455px] flex flex-row items-center z-1">
            <div className="">
              <div className="flex flex-row text-[#fff] w-[45rem]">
                <div className="flex flex-col gap-4 w-full">
                  <h1 className="text-6xl font-ayal font-thin">Ayalaan</h1>

                  <p className="text-lg mb-4 pb-2 w-[30rem] font-bold">
                    A lost alien seeks help to go back to his home, but
                    everything gets harder after the alien returns to its home.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/watch?v=kNpwAxnjbNA"
                      className="h-[3rem] w-[13rem] text-center p-2 rounded-lg bg-[#ff9637] font-semibold hover:scale-[1.2]  transition duration-[400ms]"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full relative z-0">
          <a href="https://www.youtube.com/watch?v=ujhWbKP1rKA">
            <img
              src={captainmiller}
              alt=""
              className="w-screen h-[455px] rounded-lg hover:scale-[1.3]  transition duration-[400ms] cursor-pointer "
            />
          </a>
          <div className="absolute top-[7rem] left-[1rem] w-full h-[455px] flex flex-row items-center z-0 gap-5">
            <div className="">
              <div className="flex flex-row  text-white w-[45rem]">
                <div className="flex flex-col gap-4 w-full">
                  <h1 className="text-[2.5rem] font-miller relative bottom-10 left-7">
                    CAPTAIN
                  </h1>
                  <span className="text-[4rem] font-miller absolute top-[8rem]">
                    MILLER
                  </span>

                  <p className="text-lg w-[40rem] font-bold">
                    Set in 1930s-1940s in British India and follows an outlaw
                    called miller who engages in bloody loots,heists and
                    assaults.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/watch?v=ujhWbKP1rKA"
                      className="h-[3rem] w-[13rem] text-center p-2 rounded-lg bg-[#ff9637] font-semibold hover:scale-[1.2]  transition duration-[400ms]"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <a href="https://www.youtube.com/watch?v=DQ_Sp5ced6s">
            <img
              src={japan}
              alt=""
              className="w-screen h-[455px] rounded-lg hover:scale-[1.3]  transition duration-[400ms] "
            />
          </a>
          <div className="absolute top-[-2rem] left-[-13rem] w-96 h-96 flex flex-row items-center bg-[rgba(24, 29, 56, .7)]">
            <div className="">
              <div className="flex flex-row mt-60 ml-60  text-white w-[45rem]">
                <div className="flex flex-col gap-4 w-full">
                  <h1 className="text-[5rem] font-bold font-japan mr-[27rem]">
                    JAPAN
                  </h1>

                  <p className="text-lg mb-4 pb-2 w-[30rem] font-bold">
                    A daring robbery in a jewellery showroom kickstarts the hunt
                    for Japan, a notorious robber, who is a law unto himself.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/watch?v=DQ_Sp5ced6s"
                      className="h-[3rem] w-[13rem] text-center p-2 rounded-lg bg-[#ff9637] font-semibold hover:scale-[1.2]  transition duration-[400ms]"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ">
          <a href="https://www.youtube.com/watch?v=Po3jStA673E">
            <img
              src={leo}
              alt=""
              className="w-screen h-[455px] rounded-lg hover:scale-[1.3]  transition duration-[400ms] "
            />
          </a>{" "}
          <div className="absolute top-[-2rem] left-[-13rem] w-96 h-96 flex flex-row items-center bg-[rgba(24, 29, 56, .7)]">
            <div className="">
              <div className="flex flex-row mt-60 ml-60  text-white w-[45rem]">
                <div className="flex flex-col gap-4 w-full">
                  <h1 className="text-[5rem] font-bold font-leo mr-[35rem] ">
                    LEO
                  </h1>

                  <p className="text-lg mb-4 pb-2 w-[30rem] font-bold">
                    Parthiban is a mild-mannered cafe owner in Kashmir, who
                    fends off a gang of murderous thugs and gains attention from
                    a drug cartel claiming he was once a part of them.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/watch?v=Po3jStA673E"
                      className="h-[3rem] w-[13rem] text-center p-2 rounded-lg bg-[#ff9637] font-semibold hover:scale-[1.2]  transition duration-[400ms]"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ">
          <img
            src={joe}
            alt=""
            className="w-screen h-[455px] rounded-lg hover:scale-[1.3]  transition duration-[400ms] "
          />

          <div className="absolute top-[-3rem] left-[-13rem] w-96 h-96 flex flex-row items-center bg-[rgba(24, 29, 56, .7)]">
            <div className="">
              <div className="flex flex-row mt-60 ml-60  text-white w-[45rem]">
                <div className="flex flex-col gap-4 w-full">
                  <h1 className="text-[8rem] font-bold font-joe text-[red] mr-[27rem]">
                    joe
                  </h1>

                  <p className="text-lg mb-4 pb-2 w-[30rem] text-[black] font-bold">
                    The romance of a young man who is in love with his college
                    mate ends in heartbreak.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/watch?v=2lrbAHMACrM54r"
                      className="h-[3rem] w-[13rem] text-center p-2 rounded-lg bg-[#ff9637] font-semibold hover:scale-[1.2]  transition duration-[400ms]"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ">
          <img
            src={parking}
            alt=""
            className="w-screen h-[455px] rounded-lg hover:scale-[1.3]  transition duration-[400ms] "
          />

          <div className="absolute top-[-1rem] left-[-13rem] w-96 h-96 flex flex-row items-center bg-[rgba(24, 29, 56, .7)]">
            <div className="">
              <div className="flex flex-row mt-60 ml-60  text-white w-[45rem]">
                <div className="flex flex-col gap-4 w-full">
                  <h1 className="text-6xl font-parking font-bold mr-[27rem] ">
                    PARKING
                  </h1>

                  <p className="text-lg mb-4 pb-2 w-[30rem] font-bold">
                    An elderly man and a youngster who are tenants sharing two
                    different floors of an individual house fight over a parking
                    space.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/watch?v=ugJ7TETZnn0"
                      className="h-[3rem] w-[13rem] text-center p-2 rounded-lg bg-[#ff9637] font-semibold hover:scale-[1.2]  transition duration-[400ms]"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ">
          <img
            src={hinana}
            alt=""
            className="w-screen h-[455px] rounded-lg hover:scale-[1.3]  transition duration-[400ms]"
          />

          <div className="absolute top-[2rem] left-[-13rem] w-96 h-96 flex flex-row items-center bg-[rgba(24, 29, 56, .7)]">
            <div className="">
              <div className="flex flex-row mt-60 ml-60  text-white w-[45rem]">
                <div className="flex flex-col gap-4 w-full">
                  <p className="text-lg mb-4 pb-2 w-[30rem] font-bold">
                    A lost alien seeks help to go back to his home, but
                    everything gets harder after the alien returns to its home.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/watch?v=70HhA_ZB8kw&t=17s"
                      className="h-[3rem] w-[13rem] text-center p-2 rounded-lg bg-[#ff9637] font-semibold hover:scale-[1.2]  transition duration-[400ms]"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={moneyheist}
            alt=""
            className="w-screen h-[455px] rounded-lg hover:scale-[1.3]  transition duration-[400ms]"
          />

          <div className="absolute top-[-1rem] left-[-13rem] w-96 h-96 flex flex-row items-center bg-[rgba(24, 29, 56, .7)]">
            <div className="">
              <div className="flex flex-row mt-60 ml-60  text-white w-[45rem]">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center font-bold">
                    <h1 className="text-6xl font-parking ">MONEY </h1>
                    <span className="bg-[red] w-[12rem] h-[5rem]  text-center flex items-center justify-center  text-[4rem]">
                      HEIST
                    </span>
                  </div>

                  <p className="text-lg mb-4 pb-2 w-[30rem] font-bold">
                    An unusual group of robbers attempt to carry out the most
                    perfect robbery in Spanish history - stealing 2.4 billion
                    euros from the Royal Mint of Spain.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/watch?v=_InqQJRqGW4"
                      className="h-[3rem] w-[13rem] text-center p-2 rounded-lg bg-[#ff9637] font-semibold hover:scale-[1.2]  transition duration-[400ms]"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ">
          <a href="https://www.youtube.com/watch?v=LVIRu7HWxvM">
            <img
              src={fastx}
              alt=""
              className="w-screen h-[455px] rounded-lg hover:scale-[1.3]  transition duration-[400ms]"
            />
          </a>

          <div className="absolute top-[-1rem] left-[-13rem] w-96 h-96 flex flex-row items-center bg-[rgba(24, 29, 56, .7)]">
            <div className="">
              <div className="flex flex-row mt-60 ml-60  text-white w-[45rem]">
                <div className="flex flex-col gap-4 w-full">
                  <h1 className="text-[5rem] font-fast font-bold mr-[28rem]">
                    FAST X
                  </h1>

                  <p className="text-lg mb-4 pb-2 w-[30rem] font-bold">
                    Dom Toretto and his family are targeted by the vengeful son
                    of drug kingpin Hernan Reyes.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/watch?v=LVIRu7HWxvM"
                      className="h-[3rem] w-[13rem] text-center p-2 rounded-lg bg-[#ff9637] font-semibold hover:scale-[1.2]  transition duration-[400ms]"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ">
          <img
            src={salar}
            alt=""
            className="w-screen h-[455px] rounded-lg hover:scale-[1.3]  transition duration-[400ms]"
          />

          <div className="absolute top-[2rem] left-[-13rem] w-96 h-96 flex flex-row items-center bg-[rgba(24, 29, 56, .7)]">
            <div className="">
              <div className="flex flex-row mt-60 ml-60  text-white w-[45rem]">
                <div className="flex flex-col gap-4 w-full">
                  <p className="text-lg mb-4 pb-2 w-[30rem] font-bold">
                    The fate of a violently contested kingdom hangs on the
                    fraught bond between two friends-turned-foes in this saga of
                    power, bloodshed and betrayal.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/watch?v=efrYtSEnJFc"
                      className="h-[3rem] w-[13rem] text-center p-2 rounded-lg bg-[#ff9637] font-semibold hover:scale-[1.2]  transition duration-[400ms]"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
