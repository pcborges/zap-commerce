import styled from "styled-components";
import { colors } from "../../styles/theme";

export const CartList = styled.ul`
  margin-top: 3rem;
`;

export const Item = styled.li`
  display: flex;
  height: 6rem;

  margin-bottom: 0.5rem;

  align-items: center;
  justify-content: space-between;

  img {
    width: 5.5rem;
    height: 5.5rem;
    margin-right: 0.5rem;
  }

  .product {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${colors.grey};
    border-radius: 1.5rem 0 0 1.5rem;
    padding-left: 1rem;
  }

  .quantity {
    flex: 1;
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  .buttons {
    background-color: #f4f4f4;
    border-radius: 0 1.5rem 1.5rem 0;
    border-left: 1px solid #efefef;

    .darker {
      background-color: #ececec;
      border-radius: inherit;
    }

    button {
      border: none;
      border-style: none;
      height: 5.5rem;
      width: 4rem;
      background-color: transparent;

      svg {
        stroke: ${colors.dark};
      }
    }
  }
`;
