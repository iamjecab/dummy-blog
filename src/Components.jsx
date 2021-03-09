import styled from "styled-components";

import img from "./img/Hero.jpg";

export const HeaderContainer = styled.nav`
    width: 100%;
    height: 7vh;
    display: flex;
    padding: 1vh 17vw;
    justify-content: space-between;
    background-color: rgb(242, 242, 242);
    align-items: center;
    position: fixed;
    z-index: 100;
`;

export const LinksContainer = styled.div``;

export const Link = styled.a`
    margin-right: 2vw;
    color: #696969;

    &:hover {
        cursor: pointer;
        color: black;
    }
`;

export const IconContainer = styled.div``;

export const Icon = styled.a`
    margin-right: 2vw;
    color: #696969;
    &:hover {
        cursor: pointer;
        color: black;
    }
`;

export const HeroContainer = styled.div`
    height: 70vh;
    width: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 75%;
`;

export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 60px;
`;

export const SmallText = styled.h3`
    font-size: 18px;
    color: white;
`;

export const LargeText = styled.h1`
    color: white;
    font-size: 60px;
    letter-spacing: 3px;
`;
