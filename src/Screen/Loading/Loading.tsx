import styled from "styled-components";
import { BOX } from "@constants/sizes";
import { Container } from "@ui/Container";
import { Skeleton } from "antd";

export const LoadingWrapper = styled.div`
  width: ${BOX.LARGE}px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${BOX.LARGE}px) {
    width: 100%;
    height: 100vh;
    flex-direction: column-reverse;
  }
`;

export const Loading = () => {
  return (
    <Container>
      <LoadingWrapper>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </LoadingWrapper>
    </Container>
  );
};
