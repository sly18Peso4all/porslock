import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";

import RoomDisplay from "../component/home/RoomDisplay";
import Booking from "../component/Booking";
import Stats from "../component/Stats";
import SignUp from "../component/SignUp";
import Amenties from "../component/Amenties";

const Hero = () => {
  let hero = useRef(null);
  let content = useRef(null);

  useEffect(() => {
    // content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const contentP = content.children[1];
    const contentBooking = content.children[2];
    let tl = new TimelineLite({ delay: 0.6 });

    TweenMax.to(hero, 0, { css: { visibility: "visible" } });
    // content Animations
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children],
      1,
      {
        y: 54,
        ease: Power3.easeOut,
        opacity: 0,
        delay: 0.9,
      },
      0.15
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.3)
      .from(
        contentBooking,
        1,
        { y: 20, opacity: 0, ease: Power3.easeOut },
        1.8
      );
  }, []);

  return (
    <>
      <div className="hero" ref={(el) => (hero = el)}>
        <div className="hero-box">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-content-inner" ref={(el) => (content = el)}>
                <h1>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">
                      Where comfort{" "}
                    </div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">
                      meets relaxation..
                    </div>
                  </div>
                </h1>
                <p>
                  Our hotel unveils the real essence of nature with our
                  <br /> modern and classical way to serve you.
                </p>
                <div className="booking">
                  <Booking />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RoomDisplay />
      <Stats />
      <Amenties />
      <SignUp />
    </>
  );
};

export default Hero;
