import React from 'react';
import {Dots, Dot} from "./Dots";

export default function Index({ slides, activeSlide }) {
    const renderedDots = slides.map((slide, i) => (
        <Dot key={slide} active={activeSlide === i}/>
    ));
    return (
        <Dots>
         {renderedDots}
        </Dots>
    )
}
