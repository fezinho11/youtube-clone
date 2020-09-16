import React from "react";

import {
  Container,
  HamburguerMenuAndLogo,
  NotificationsAndProfile,
  SearchBar,
  HamburguerMenu,
  YoutubeLogo,
  Input,
  Button,
  SearchIcon,
  VideoIcon,
  AppsIcon,
  NotificationIcon,
  ProfileImage,
} from "./styles";

import Logo from "../../assets/youtube-logo.svg";
import Me from "../../assets/me.jpg";

const Header: React.FC = () => {
  return (
    <Container>
      <HamburguerMenuAndLogo>
        <HamburguerMenu />
        <YoutubeLogo src={Logo} alt="Youtube Logo" />
      </HamburguerMenuAndLogo>
      <SearchBar>
        <Input placeholder="Pesquisar" />
        <Button>
          <SearchIcon />
        </Button>
      </SearchBar>
      <NotificationsAndProfile>
        <VideoIcon />
        <AppsIcon />
        <NotificationIcon />
        <ProfileImage src={Me} />
      </NotificationsAndProfile>
    </Container>
  );
};

export default Header;
