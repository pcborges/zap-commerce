import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const Container = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 999;
`;

export const Navigation = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  border-radius: 35px 35px 0px 0px;
  padding: 0.01em 1.2rem !important;

  a {
    cursor: pointer;
    color: ${colors.dark};

    &:hover {
      svg {
        stroke: ${colors.primary};
        fill: ${colors.primary};
      }
    }
  }

  .active {
    svg {
      stroke: ${colors.primary};
      fill: ${colors.primary};
    }
  }
`;

export const Button = styled.button`
  padding: 1rem 2.6rem;
  border-radius: 1.9rem;
  background-color: ${colors.dark};
  font-weight: 500;
  color: white;
  vertical-align: bottom;
  border-style: none;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`;
