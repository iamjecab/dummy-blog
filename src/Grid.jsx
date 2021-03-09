import React from "react";
import styled from "styled-components";

// import url1 from "./img/card2.jpeg";

// https://source.unsplash.com/500x500

const Container = styled.div`
    display: flex;
    padding: 0vh 17vw;
    /* justify-content: center; */
`;

const Card = styled.div`
    /* background-image: url ("https://source.unsplash.com/260x260/?nature"); */
    height: 100px;
    width: 100%;

    position: relative;
    padding-top: 10vh;
`;

const Button = styled.div`
    padding: 5px 35px;
    text-decoration: none;
    outline: none;
    color: #2573da;
    background-color: white;
    position: absolute;
    font-size: 21px;
    top: 220px;
    left: 130px;

    &:hover {
        color: white;
        background-color: #2573da;
    }
`;

function Grid() {
    return (
        <Container>
            <Card>
                <img src="https://source.unsplash.com/389x261" alt="p" />
                <Button>Travel</Button>
            </Card>
            <Card>
                <img src="https://source.unsplash.com/389x260" alt="p" />
                <Button>Eat</Button>
            </Card>
            <Card>
                <img src="https://source.unsplash.com/390x260" alt="p" />
                <Button>Relax</Button>
            </Card>
        </Container>
    );
}

export default Grid;
