"use-client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <ContainerDesktop>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </ContainerDesktop>
      <ContainerMobile>
        <div>
          <Button onClick={() => setOpen(!open)}>
            <Line variants={topVariants} animate={open ? "opened" : "closed"} />
            <Line
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
            />
            <Line
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
            />
          </Button>
        </div>

        {open && (
          <LinksContainerMobile
            variants={listVariants}
            initial="closed"
            animate="opened"
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariants}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </LinksContainerMobile>
        )}
      </ContainerMobile>
    </>
  );
}

const ContainerDesktop = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  display: flex;
  background-color: transparent;
  width: 30%;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const ContainerMobile = styled.div`
  /* height: 20px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  display: none;

  @media only screen and (max-width: 800px) {
    display: flex;
  }
`;

const LinksContainerMobile = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 20px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8;
  z-index: 50;
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const Line = styled(motion.div)`
  width: 36px;
  height: 2px;
  background-color: white;
  transform-origin: left;
`;

export default Navbar;
