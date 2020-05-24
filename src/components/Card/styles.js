import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  height: 225px;
  width: 160px;
  margin-bottom: 15px;
`;

export const Header = styled.div`
  height: 160px;
  background: ${colors.grey};
  border-radius: 15px;
  margin-bottom: 5px;
  position: relative;

  .badge {
    position: absolute;
    padding: 2px 15px;
    top: 10px;
    left: 5px;
    font-size: 0.9em;
    border-radius: 12.5px;
    text-align: center;
    font-weight: 500;

    .orange {
      background-color: ${colors.orange};
      color: white;
    }

    .blue {
      background-color: ${colors.blue};
      color: white;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  padding-left: 10px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    align-self: flex-start;
  }
`;

export const Description = styled.div`
  flex: 1;

  .price {
    color: #999999;
    font-size: 1.1rem;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  padding-left: 8px;
  padding-right: 5px;
`;
