import React from "react";
import styled from "styled-components";
import {
    FaUserCircle,
    FaRegEye,
    FaRegCommentAlt,
    FaRegHeart,
} from "react-icons/fa";

const Wrapper = styled.div`
    /* height: 100vh;
    
    width: 100vw; */
    margin: 1vh 17vw;
`;

const Meta = styled.div`
    padding: 3vh 0 0 3vh;
    display: flex;
    align-items: flex-end;
`;

const Date = styled.div`
    font-size: 12px;
    padding-left: 10px;
`;

const ImageContainer = styled.div`
    background-image: url(${(props) => props.url});
    /* width: 100vw; */
    height: 32vw;

    background-size: cover;
    background-repeat: no-repeat;
    /* display: flex; */
`;

const Link = styled.a`
    padding: 2vh 3vh 0;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    /* justify-content: space-between; */
    .heading {
        padding-bottom: 17px;
    }
    &:hover {
        color: #2573da;
        cursor: pointer;
    }

    .para {
        margin-bottom: 28px;
    }
`;

const CommentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Comment = styled.div`
    display: flex;
    padding: 2vh 3vh 0;
    p {
        padding: 0 10px;
    }
`;

const Heart = styled.div`
    padding: 2vh 3vh 0;
    display: flex;

    p {
        margin-right: 10px;
    }
`;

export default function BlogCard(props) {
    return (
        <>
            <Wrapper>
                <ImageContainer url={props.url}></ImageContainer>
                <Meta>
                    <FaUserCircle size={33} color={"gray"}></FaUserCircle>
                    <Date>
                        <span>{props.meta}</span>
                    </Date>
                </Meta>
                <Link>
                    <h4 className="heading">{props.heading}</h4>
                    <p className="para">{props.paragraph}</p>
                    <hr />
                </Link>
                <CommentWrapper>
                    <Comment>
                        <FaRegEye></FaRegEye>
                        <p>0</p>
                        <FaRegCommentAlt></FaRegCommentAlt>
                        <p>0</p>
                    </Comment>
                    <Heart>
                        <p>0</p>
                        <FaRegHeart color="red"></FaRegHeart>
                    </Heart>
                </CommentWrapper>
            </Wrapper>
        </>
    );
}
