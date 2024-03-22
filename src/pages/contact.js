import React from "react";
import styled from "styled-components";
import { Section } from "../styles/styles";
import Navbar from "@/components/Navbar";


function Contact() {
  return (
    <>
      <ContactSection>
        <Navbar />
        <p>contact</p>
      </ContactSection>
    </>
  );
}

const ContactSection = styled(Section)`

`;

export default Contact;
