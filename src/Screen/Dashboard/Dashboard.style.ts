import styled from "styled-components";
import { YELLOW } from "../../constants/colors";

export const DashboardWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-grow: 1;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Stats = styled.div`
  padding: 10px;
  flex-basis: 200px;
  display: flex;
  border-radius: 20px;
  background-color: ${YELLOW};
  flex-direction: column;
`;
