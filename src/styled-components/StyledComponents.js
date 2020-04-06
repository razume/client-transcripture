import styled from "styled-components";

import {
  border,
  color,
  flexbox,
  layout,
  shadow,
  space,
  typography,
} from "styled-system";

export const Box = styled.div`
  ${border}  
  ${color}
  ${layout}
  ${shadow}
  ${space}
  ${flexbox}
  ${typography}
`;

// export const Button = styled.button`
//   ${color}
//   ${layout}
//   ${space}
//   ${typography}
// `;

export const Card = styled.div`
  ${{
    boxShadow: "2px 10px 16px #d6d6d6",
    padding: "1rem",
    marginBottom: "1rem",
    marginTop: "1rem",
    height: "18rem",
    width: "15rem",
    backgroundColor: "white",
    borderRadius: "5px",
  }}
`;

export const Heading = styled.h2`
  ${{
    marginLeft: "1rem",
  }}
  ${border}  
  ${color}
  ${flexbox}
  ${layout}
  ${shadow}
  ${space}
  ${typography}
`;

export const Link = styled.a`
  ${{
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textShadow: "1px 1px 15px #1c2eba, -1px -1px 15px #5358db",
    },
  }}
`;

export const NavBar = styled.div`
  ${{
    backgroundColor: "#4d79ff",
    boxShadow: "0px 2px 15px gray",
    height: "3rem",
    marginBottom: "3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  }}
  ${color}
`;

export const Text = styled.p`
  ${color}
  ${layout}
  ${space}
  ${typography}
`;
