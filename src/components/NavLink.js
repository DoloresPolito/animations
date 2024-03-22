"use-client";
import React from "react";
import styled, { css } from 'styled-components';
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ link }) {
  const pathname = usePathname();

  return (
    <>
      <StyledNextLink href={link.url} active={pathname === link.url}>{link.title}</StyledNextLink>
    </>
  ); 
}

const StyledNextLink = styled(Link)`
padding:5px;
border-radius: 5px;

  ${({ active }) => active && css`
    background-color: black;
    color: white;

  `}
`;

export default NavLink;
