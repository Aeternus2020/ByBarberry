import React, { useEffect } from 'react';
import '../../styles/secondSlider.css';
import barber2 from "../../images/ryslan.webp"
import barber3 from "../../images/dima.webp"
import barber1 from "../../images/sasha.webp"
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'

const cardData = [
    {
        name: 'олександр',
        location: 'elder barber',
        imageSrc: barber1,
    },
    {
        name: 'руслан',
        location: 'barber',
        imageSrc: barber2,
    },
    {
        name: 'дмитро',
        location: 'young barber',
        imageSrc: barber3,
    },
];

function SecondSlider() {
    const divStyle = {
        margin: "0px 0 200px 0",
    };
    useEffect(() => {
        let removeEl = document.querySelectorAll(".slider-bullets")
        let bullets = document.querySelectorAll(".slider-bullets-item")
        bullets.forEach((e) => {
            if (e instanceof HTMLDivElement) {
              e.style.backgroundColor = "#F0F0E6";
              e.style.marginTop = "20px";
            }
          });

        if (removeEl.length >= 2) {
            removeEl[1].remove();
        }
    }, [])
    return (<Slider
        slideClass={'my-slider-infinite'}
        infinite={false}
        bullets={true}
        arrowsNav={false}>
        <p className='section-second-slider-name'>БАРБЕРИ</p>
        <div style={divStyle}>
            <div className='slider my-slider-infinite barberrs'>
                <ul className='slider-wrapper'>
                    {cardData.map((item) => (
                        <li key={item.name}>
                            <p className='slider-barber-name'>{item.name}</p>
                            <p className='slider-barber-location'>{item.location}</p>
                            <img src={item.imageSrc} style={{ zIndex: 1, margin: "0 auto" }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Slider>)
}

export default SecondSlider;


