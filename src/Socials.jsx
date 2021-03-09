import React from "react";
import styled from "styled-components";
import {
    FaFacebookF,
    FaInstagram,
    FaPinterest,
    FaTwitter,
} from "react-icons/fa";

const Wrapper = styled.div`
    margin: 25px 0 0 0;
    padding: 20px 19vw;
    display: flex;
    justify-content: space-around;
    background-color: #2573da;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: white;

        h3 {
            padding-left: 10px;
            font-weight: 150;
        }
    }
`;

export default function Socials() {
    return (
        <Wrapper>
            <div>
                <FaFacebookF color="white"></FaFacebookF>
                <h3>facebook</h3>
            </div>
            <div>
                <FaInstagram color="white"></FaInstagram>
                <h3>Instagram</h3>
            </div>
            <div>
                <FaPinterest color="white"></FaPinterest>
                <h3>Pintrest</h3>
            </div>
            <div>
                <FaTwitter color="white"></FaTwitter>
                <h3>Twitter</h3>
            </div>
        </Wrapper>
    );
}
