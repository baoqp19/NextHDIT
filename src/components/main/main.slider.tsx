"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slider from "react-slick";
import { Settings } from "react-slick"
import Divider from '@mui/material/Divider';

interface IProps {
    data: ITrackTop[]
}

const MainSlider = (props: IProps) => {

    
    const NextArrow = (props: any) => {
        return (
            <Button variant="outlined"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                }}
            >
                <ChevronRightIcon />
            </Button>
        )
    }

    const PrevArrow = (props: any) => {
        return (
            <Button variant="outlined" onClick={props.onClick}
                sx={{
                    position: "absolute",
                    top: "50%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                }}
            >
                <ChevronLeftIcon />
            </Button>
        )
    }


    var settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,

        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // box === div 
    return (

        <Box
            sx={{
                margin: "0 50px",
                ".abc": {
                    padding: "0 10px"
                },
                "h3": {
                    border: "1px solid #ccc",
                    padding: "20px",
                    height: "200px",

                }
            }}
        >
            <h2> Multiple tracks </h2>

            <Slider {...settings}>
                <div className="abc">
                    <h3>Track 1</h3>
                </div>
                <div className="abc">
                    <h3>Track 2</h3>
                </div>
                <div className="abc">
                    <h3>Track 3</h3>
                </div>
                <div className="abc">
                    <h3>Track 4</h3>
                </div>
                <div className="abc">
                    <h3>Track 5</h3>
                </div>
                <div className="abc">
                    <h3>Track 6</h3>
                </div>
                <div className="abc">
                    <h3>Track 7</h3>
                </div>
                <div className="abc">
                    <h3>Track 8</h3>
                </div>
                <div className="abc">
                    <h3>Track 9</h3>
                </div>
            </Slider>
            {/* Divider là gạch  */}
            <Divider />      
        </Box>
    );
}
export default MainSlider