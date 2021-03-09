import React from "react";
import styled from "styled-components";
import {
    FaFacebookF,
    FaInstagram,
    FaPinterest,
    FaTwitter,
} from "react-icons/fa";

const Wrapper = styled.div`
    width: 100%;
    height: 30vh;
    padding: 7vh 17vw;
    display: flex;
    background-color: rgba(105, 105, 105, 0.9);
    justify-content: space-between;
`;

const AboutContainer = styled.div`
    display: flex;
`;
const About = styled.div`
    display: flex;
    color: white;

    img {
        height: 140px;
        padding-right: 22px;
    }
    a {
        color: white;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        padding-bottom: 25px;
        padding-right: 25px;
        font-size: 24px;
    }
    p {
        padding-bottom: 20px;
    }
`;

const ContactContainer = styled.div`
    display: flex;
    margin-right: 50px;
    flex-direction: column;
    width: 27%;
    color: white;
    h2 {
        padding-bottom: 25px;
    }
    input {
        background-color: rgba(105, 105, 105, 0.9);
        outline: white;
        border: 1px solid white;
        height: 30px;

        margin: 12px 0;
        ::placeholder {
            color: white;
        }
        :hover {
            border: 2px solid white;
        }
    }

    button {
        padding: 8px 25px;
        opacity: 1;
        background-color: #2573da;
        outline: none;
        border: none;
        font-size: 16px;

        color: white;
    }
`;
const FootBar = styled.div`
    background-color: rgba(105, 105, 105, 0.9);
    display: flex;
    padding: 7vh 17vw;
    justify-content: space-between;
    color: white;
`;
const Copyright = styled.div``;
const Socials = styled.div`
    width: 30%;
    .icon {
        margin-right: 18px;
        color: white;
    }
`;

export default function Footer() {
    return (
        <>
            <Wrapper>
                <AboutContainer>
                    <About>
                        <img src="https://source.unsplash.com/140x140" alt="" />
                        <Text>
                            <h3>About Me</h3>
                            <p>
                                I'm a paragraph. Click here to add your own text{" "}
                                <br />
                                and edit me. It’s easy. Just click “Edit Text”{" "}
                                <br />
                                or double click me to add your own content and
                                <br />
                                make changes to the font.
                            </p>
                            <a href="#">Read More</a>
                        </Text>
                    </About>
                </AboutContainer>
                {/* <p>© 2023 by Going Places. Proudly created with Wix.com</p> */}
                <ContactContainer>
                    <h2>Join My Mailing List</h2>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe Now</button>
                </ContactContainer>
            </Wrapper>
            <FootBar>
                <Copyright>
                    <h4>
                        © 2023 by Going Places. Proudly created with Wix.com
                    </h4>
                </Copyright>
                <Socials>
                    <FaFacebookF className="icon"></FaFacebookF>
                    <FaInstagram className="icon"></FaInstagram>
                    <FaPinterest className="icon"></FaPinterest>
                    <FaTwitter className="icon"></FaTwitter>
                </Socials>
            </FootBar>
        </>
    );
}
