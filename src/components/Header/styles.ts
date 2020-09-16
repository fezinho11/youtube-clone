import styled from "styled-components";

import { Menu } from "@styled-icons/heroicons-outline/Menu";
import { Search } from "@styled-icons/boxicons-regular/Search";
import { VideoPlus } from "@styled-icons/boxicons-solid/VideoPlus";
import { Apps } from "@styled-icons/ionicons-sharp/Apps";
import { Notifications } from "@styled-icons/ionicons-sharp/Notifications";

export const HamburguerMenu = styled(Menu)`
  color: #606060;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const YoutubeLogo = styled.img`
  width: 80px;
  height: 24px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  height: 4rem;
`;

export const HamburguerMenuAndLogo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10%;
`;

export const SearchBar = styled.div`
  position: relative;
`;

export const Input = styled.input`
  min-width: 650px;
  height: 33px;
  padding: 0 10px;
  color: #000;
  border: 1px solid #bebebe;
  border-radius: 2px 0 0 2px;
  z-index: 2;

  outline: 0;

  &:focus {
    border: 1.1px solid #1c62b9;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  &::placeholder {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 11%;
  height: 33px;
  border: 1px solid #bebebe;
  color: rgb(170, 170, 170);
  top: 0px;
  right: 0;
  border-radius: 0px 2px 2px 0;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  background-color: #f0f0f0;
  z-index: 1;

  &:hover {
    color: #333333;
  }
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
`;

export const NotificationsAndProfile = styled.div`
  width: 12%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const VideoIcon = styled(VideoPlus)`
  width: 24px;
  height: 24px;
  color: #606060;
  cursor: pointer;
`;

export const AppsIcon = styled(Apps)`
  width: 24px;
  height: 24px;
  color: #606060;
  cursor: pointer;
`;

export const NotificationIcon = styled(Notifications)`
  width: 24px;
  height: 24px;
  color: #606060;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
