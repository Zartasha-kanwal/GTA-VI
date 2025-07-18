import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import bg_img from "../Assets/bg.png";
import sky from "../Assets/sky.png";
import girl from "../Assets/girlbg.png";
import ps5 from "../Assets/ps5.png";
import girl2 from "../Assets/imag.png";
import "../../index.css";
import "remixicon/fonts/remixicon.css";

export default function GTA6() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svgEl = document.querySelector(".svg");
          if (svgEl) svgEl.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  useGSAP(() => {
    if (!showContent) return;
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "expo.inOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    });
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
    const is2XLScreen = window.matchMedia("(min-width: 1536px)").matches;

    let topPosition;

    if (is2XLScreen) {
      topPosition = "0";
    } else if (isLargeScreen) {
      topPosition = "0";
    } else {
      topPosition = "0%";
    }
    gsap.to(".girl", {
      scale: 1.5,
      top: isLargeScreen ? "34%" : "40%",
      x: "-40%",
      y:"-70%",
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      top: topPosition,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: xMove * 0.4,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <div className="h-[100%]">
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href={bg_img}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7] ">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute left-0 top-0 z-10 w-full lg:py-10 lg:px-10 py-3 px-5 ">
              <div className="logo flex gap-4 items-center">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-9 h-1 bg-white"></div>
                  <hr className="line w-6 h-1 bg-white"></hr>
                  <div className="line w-3 h-1 bg-white"></div>
                </div>
                <h3 className="font-pricedown lg:text-4xl text-xl text-white mt-[-4px]">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv overflow-hidden relative w-full h-screen lg:mt-0 pt-[5rem] ">
              <img
                src={sky}
                className="sky absolute top-0 left-0 w-full h-full scale-150 rotate-[-20deg] object-cover"
              />
              <img
                src={bg_img}
                className="bg absolute top-0 left-0 w-full h-full scale-[1.8] rotate-[-3deg] object-cover"
              />

              <div className="text flex flex-col gap-4  relative w-max h-max  lg:top-6 left-1/2 transform -translate-x-1/2 lg:text-[5rem] text-[3rem] 2xl:text-[8rem] font-pricedown text-white leading-none rotate-[-10deg] scale-[1.2]">
                <h1 className="absolute lg:left-[-12rem] left-[-8rem] top-0  2xl:translate-y-[-30px] ">
                  grand
                </h1>
                <h1 className="absolute lg:left-[-7rem] left-[-5rem] top-[5.5rem]  2xl:translate-y-[30px] ">
                  theft
                </h1>
                <h1 className="absolute lg:left-[-12rem] left-[-8rem] top-[11rem]  2xl:translate-y-[80px] ">
                  auto
                </h1>
              </div>

              <img
                src={girl}
                className="girl absolute left-1/2  scale-[2] rotate-[-10deg] transform -translate-x-1/2 -translate-y-1/2 max-h-[100%]   "
              />
            </div>
            <div className="bottombar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t  from-black to-transparent">
              <div className="lg:flex items-center gap-3 hidden">
                <i className="ri-arrow-down-line text-3xl"></i>
                <h4 className="text-xl">Scroll Down</h4>
              </div>
              <img
                src={ps5}
                className="h-[45px] absolute left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-10 bg-black">
            <div className="ctnr w-full max-w-[1400px] min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">
              {/* Left Image Section */}
              <div className="l-img w-full lg:w-1/2 h-auto lg:h-full p-4 sm:p-10 lg:p-9 flex items-center justify-center">
                <img
                  src={girl2}
                  className="w-full max-w-[400px] h-auto object-contain"
                />
              </div>

              {/* Right Text Section */}
              <div className="r-img w-full lg:w-[30%] text-white flex flex-col items-start justify-start px-4 sm:px-8 lg:px-0 ">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-pricedown">
                  Still Running
                </h1>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-pricedown">
                  Not Hunting
                </h1>

                <p className="mt-4 sm:mt-6 text-sm sm:text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam at incidunt obcaecati optio ratione minima blanditiis
                  ad deleniti sunt assumenda?
                </p>
                <p className="mt-2 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                  recusandae?
                </p>
                <p className="mt-4 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, id!
                </p>

                <button className="mt-6 sm:mt-10 bg-yellow-500 text-black py-3 px-6 sm:py-4 sm:px-8 font-pricedown text-lg sm:text-xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
