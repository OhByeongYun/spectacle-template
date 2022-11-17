import React from "react";
import { 
    Box,
    FlexBox,
    Heading,
    Image,
    Slide
 } from "spectacle";
import city from "../assets/city.jpg";
import kat from "../assets/kat.png";

export default function Slide2() {
    return (
        <Slide backgroundColor="black" backgroundImage={`url(${city})`} backgroundOpacity={0.5}>
            <FlexBox flexDirection="column">
                <Box border="solid 8px #fff">
                    <Heading>OMG!</Heading>
                </Box>
                <Box  marginTop="2em">
                    <Image src={kat} width={400}/>
                </Box>
            </FlexBox>
        </Slide>
    );
}
