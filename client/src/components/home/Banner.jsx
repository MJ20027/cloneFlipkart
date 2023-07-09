import Carousel from 'react-multi-carousel';
import { bannerData } from '../../constants/data';
import 'react-multi-carousel/lib/styles.css';

import { styled } from '@mui/material';

const Image = styled('img')({
    width: '100%',
    height: 280
})

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min:1024 },
        items:1
    },
    tablet: {
        breakpoint: { max: 1024, min:464 },
        items:1
    },
    mobile: {
        breakpoint: { max: 464, min:0 },
        items:1
    }
};

const Banner = () => {
    return (
        <Carousel 
            responsive={responsive} 
            draggable={false}
            // showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
        >
            {
                bannerData.map(data => (
                    <Image src={data.url} alt="banner" />
                ))
            }
        </Carousel>
    )
}

export default Banner;