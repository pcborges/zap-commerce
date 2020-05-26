import styled from "styled-components";
import { colors } from "../../../styles/theme.js";

export const Container = styled.div`
  padding: 0.01em 1.6rem;
`;

export const Categories = styled.section`
  overflow-y: scroll;
  -ms-overflow-style: none;
  margin: 1.2rem 0;

  &::-webkit-scrollbar {
    display: none;
  }

  .category-list {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    font-size: 1.8rem;
    font-weight: bold;
    width: 150vw;

    a {
      text-decoration: none;
      color: inherit;
    }

    li {
      &:hover {
        border-bottom: 2px solid ${colors.primary};
        color: ${colors.primary};
      }
    }
    .active {
      border-bottom: 2px solid ${colors.primary};
      color: ${colors.primary};
    }
  }
`;
