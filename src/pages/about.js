import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Section } from "../styles/styles";
import Navbar from "@/components/Navbar";

function About() {
  return (
    <>
      <AboutSection>
        <Navbar />
        <p>about</p>
      </AboutSection>
    </>
  );
}

const AboutSection = styled(Section)`

`;

export default About;
