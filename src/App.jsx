import React from "react";
import GlobalStyles from "./GlobalStyles";
import {
    FaFacebookF,
    FaInstagram,
    FaPinterest,
    FaTwitter,
} from "react-icons/fa";

import {
    HeaderContainer,
    LinksContainer,
    IconContainer,
    Link,
    Icon,
    HeroContainer,
    Overlay,
    SmallText,
    LargeText,
} from "./Components";
import Partners from "./Partners";
import Grid from "./Grid";
import Margin from "./Margin";
import BlogCard from "./BlogCard";
import Socials from "./Socials";
import Gallery from "./Gallery";
import Footer from "./Footer";

function App() {
    return (
        <>
            <GlobalStyles />
            <HeaderContainer>
                <LinksContainer>
                    <Link>
                        Home
                        <a id="me"></a>
                    </Link>
                    <Link>Travel</Link>
                    <Link>About</Link>
                    <Link>Eat</Link>
                    <Link>Relax</Link>
                    <Link>Video</Link>
                </LinksContainer>
                <IconContainer>
                    <Icon>
                        <FaFacebookF></FaFacebookF>
                    </Icon>
                    <Icon>
                        <FaInstagram></FaInstagram>{" "}
                    </Icon>
                    <Icon>
                        <FaPinterest></FaPinterest>
                    </Icon>
                    <Icon>
                        <FaTwitter></FaTwitter>
                    </Icon>
                </IconContainer>
            </HeaderContainer>
            <HeroContainer>
                <Overlay>
                    <SmallText>Travel Blog</SmallText>
                    <LargeText>Going Places</LargeText>
                    <SmallText>
                        I haven’t been everywhere, but it’s on my list
                    </SmallText>
                </Overlay>
            </HeroContainer>
            <Grid></Grid>
            <Margin top={350} left={50}></Margin>
            <Partners></Partners>
            <Margin top={70}></Margin>
            <BlogCard
                meta="Nov 19, 2020. 1 min"
                heading="Silky Sands, Turquoise Surf"
                url="https://source.unsplash.com/501x500"
                paragraph="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Wel..."
            ></BlogCard>
            <Margin top={70}></Margin>
            <BlogCard
                meta="Nov 19, 2020. 1 min"
                heading="Essential Spa & Body Treatments"
                url="https://source.unsplash.com/500x501"
                paragraph="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Wel..."
            ></BlogCard>
            <Margin top={70}></Margin>
            <BlogCard
                meta="Nov 19, 2020. 1 min"
                heading="Top 5 Beaches in Corfu, Greece"
                url="https://source.unsplash.com/501x501"
                paragraph="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Wel..."
            ></BlogCard>
            <Socials></Socials>
            <Gallery></Gallery>
            <Footer></Footer>
        </>
    );
}

export default App;
