import styled from "styled-components";
import { colors } from "../../../styles/theme.js";

export const Container = styled.div`
  padding: 0.01em 1.6rem;
`;

export const Navigation = styled.nav`
  height: 55px;
  margin: 20px 0 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.6rem;

  span {
    padding: 0 0 4px 2px;
  }
`;

export const MenuItens = styled.div`
  li {
    display: inline;
  }

  button {
    width: 44px;
    height: 44px;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    padding-bottom: 5px;
    background-color: #fff;
  }
`;
