import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
    margin-top: ${(props) => props.top}px;
    margin-bottom: ${(props) => props.bottom};
    margin-right: ${(props) => props.right};
    margin-left: ${(props) => props.left};
`;

export default function Margin(props) {
    return (
        <Wrapper
            top={props.top}
            bottom={props.bottom}
            left={props.left}
            right={props.right}
        ></Wrapper>
    );
}
