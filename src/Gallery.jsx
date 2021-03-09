import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    margin: 0;
`;

const Card = styled.div`
    background-image: url(${(props) => props.url});
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: transparent;
    &:hover {
        color: white;
        box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
    }
`;

export default function Gallery() {
    return (
        <>
            <Wrapper>
                <Card url={"https://source.unsplash.com/380x380"}>
                    {/* <img src="https://source.unsplash.com/380x380" alt="1" /> */}
                    <p>@wix: #wix, #website, #freewebsite,</p>
                    <p>#websitetemplate, #wix.com</p>
                </Card>
                <Card url={"https://source.unsplash.com/380x381"}>
                    {/* <img src="https://source.unsplash.com/380x381" alt="1" /> */}
                    <p>@wix: #wix, #website, #freewebsite,</p>
                    <p>#websitetemplate, #wix.com</p>
                </Card>
                <Card url={"https://source.unsplash.com/381x380"}>
                    {/* <img src="https://source.unsplash.com/381x382" alt="1" /> */}
                    <p>@wix: #wix, #website, #freewebsite,</p>
                    <p>#websitetemplate, #wix.com</p>
                </Card>
                <Card url={"https://source.unsplash.com/382x380"}>
                    {/* <img src="https://source.unsplash.com/382x379" alt="1" /> */}
                    <p>@wix: #wix, #website, #freewebsite,</p>
                    <p>#websitetemplate, #wix.com</p>
                </Card>
                <Card url={"https://source.unsplash.com/380x382"}>
                    {/* <img src="https://source.unsplash.com/381x380" alt="1" /> */}
                    <p>@wix: #wix, #website, #freewebsite,</p>
                    <p>#websitetemplate, #wix.com</p>
                </Card>
            </Wrapper>
        </>
    );
}
