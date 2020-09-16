import styled from "styled-components";

import { Like } from "@styled-icons/boxicons-solid/Like";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 5px;
`;

export const VideoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin-left: 4rem;
`;

export const VideoTitle = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
`;

export const VideoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const VideoDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #606060;
`;

export const VideoActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeIcon = styled(Like)`
  height: 24px;
  width: 24px;
  color: #606060;
  margin-right: 5px;
`;

export const SuggestedVideos = styled.div`
  display: flex;
  width: 25%;
  margin-left: 6rem;
  flex-direction: column;
`;
