import React from "react";
import Player from "react-player";

import {
  Container,
  VideoColumn,
  SuggestedVideos,
  VideoTitle,
  VideoDescription,
  VideoInfo,
  VideoActions,
  LikeContainer,
  LikeIcon,
} from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <VideoColumn>
        <Player
          url="https://youtu.be/zJTCI4R3ZLM"
          height="580px"
          width="1060px"
        />
        <VideoTitle>Título do vídeo</VideoTitle>
        <VideoInfo>
          <VideoDescription>
            18 visualizações • 11 de set. de 2020
          </VideoDescription>
          <VideoActions>
            <LikeContainer>
              <LikeIcon />
              <p style={{ color: "#606060" }}>321</p>
            </LikeContainer>
          </VideoActions>
        </VideoInfo>
      </VideoColumn>
      <SuggestedVideos>Lista de Vídeos</SuggestedVideos>
    </Container>
  );
};

export default Main;
