"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import { Section } from "../styles/styles";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

import image1 from "../../public/assets/1.jpg";
import image2 from "../../public/assets/2.jpg";
import image3 from "../../public/assets/3.jpg";
import image4 from "../../public/assets/4.jpg";

function Portfolio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: "",
    ofset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6,1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8,1])
  return (
    <>
      <Navbar />
      <PortfolioSection>
        <PortfolioContainer>
          <h2>Go creative.</h2>
          <p>
            Bring the color on your next adventure. Portable, wearable, and
            take-anywhere-able, the tiniest member of the Polaroid family is
            your adventurous creative sidekick. Pair it with vibrant,
            psychedelic Go Filters and some classic (but tiny) White Frame Film,
            and you've got everything you need to chase inspiration, wherever it
            may lead you. Film and filters only compatible with the Polaroid Go
            Camera.
            <br />
            <br />
          </p>
          <p>
            Bring the color on your next adventure. Portable, wearable, and
            take-anywhere-able, the tiniest member of the Polaroid family is
            your adventurous creative sidekick. Pair it with vibrant,
            psychedelic Go Filters and some classic (but tiny) White Frame Film,
            and you've got everything you need to chase inspiration, wherever it
            may lead you. Film and filters only compatible with the Polaroid Go
            Camera.
            <br />
            <br />
          </p>
          <h2>Go creative.</h2>
          <p>
            Bring the color on your next adventure. Portable, wearable, and
            take-anywhere-able, the tiniest member of the Polaroid family is
            your adventurous creative sidekick. Pair it with vibrant,
            psychedelic Go Filters and some classic (but tiny) White Frame Film,
            and you've got everything you need to chase inspiration, wherever it
            may lead you. Film and filters only compatible with the Polaroid Go
            Camera.
            <br />
            <br />
          </p>

          <div ref={ref}>
            <ImageContainer
              style={{ scale: scaleProgress, opacity: opacityProgress }}
            >
              <Image src={image1} alt="image1" />
            </ImageContainer>

            <ImageContainer
              style={{ scale: scaleProgress, opacity: opacityProgress }}
            >
              <Image src={image2} alt="image2" />
            </ImageContainer>

            <ImageContainer
              style={{ scale: scaleProgress, opacity: opacityProgress }}
            >
              <Image src={image3} alt="image3" />
            </ImageContainer>

            <ImageContainer
              style={{ scale: scaleProgress, opacity: opacityProgress }}
            >
              <Image src={image4} alt="image4" />
            </ImageContainer>
          </div>
        </PortfolioContainer>
      </PortfolioSection>
    </>
  );
}

const PortfolioSection = styled(Section)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  padding-top: 50px;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
  }

  p {
    font-weight: 300;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 800px;
  gap: 80px;
  margin-bottom: 50px;

  img {
    height: 600px;
    width: 900px;
  }
`;

export default Portfolio;
