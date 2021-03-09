import React from "react";
import styled from "styled-components";

const Partner = styled.div`
    /* margin: 33vh 0; */
    background-color: rgb(242, 242, 242);
    height: 10vh;
    padding: 1vh 17vw;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center;
    text-align: center; */
`;

const Text = styled.div`
    font-size: 20px;
    margin-right: 105px;
    padding: 25px;
`;

{
    /* <h3>As featured in</h3>
<h3>PLANETOUR</h3>
<h3>WORLD TRAVEL</h3>
<h3>skycloud</h3> */
}
export default function Partners() {
    return (
        <Partner>
            <TextContainer>
                <Text>
                    <h3>As featured in</h3>
                </Text>

                <Text>
                    <h3>PLANETOUR</h3>
                </Text>

                <Text>
                    <h3>WORLD TRAVEL</h3>
                </Text>

                <Text>
                    <h3>skycloud</h3>
                </Text>
            </TextContainer>
        </Partner>
    );
}
