import { Row } from 'Component/widget/Row';
import React, { CSSProperties, useRef, useState } from 'react';
import Slider from 'react-slick';


interface ISamplePrevArrow {
    className?:string,
     onClick?:(e:any)=>void,
      style?:CSSProperties

}
function SampleNextArrow(props:ISamplePrevArrow) {
    const { className, onClick, style } = props;
    return (
      <div
        onClick={onClick}
      >
        <svg width="24" height="24" className={className} style={style} viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M11.3333 7.3333l2-2L24 16 13.3333 26.6666l-2-2L20 16l-8.6667-8.6667z"></path></svg>
        </div>
    );
  }

  function SamplePrevArrow(props:ISamplePrevArrow) {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
      >
              <svg width="24" className={className}
   height="24" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M20.6667 24.6666l-2 2L8 16 18.6667 5.3333l2 2L12 16l8.6667 8.6666z"></path></svg>

        </div>
    );
  }

export const SliderComponent = () => {
    const [index, setIndex] = useState<number>(0);
        const beforeChange = (prev:number, next:number) => {
            setIndex(Math.floor(next));
          };
          const sliderRef = useRef<Slider>(null);


   const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 8,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: beforeChange,

      };


      const next = () => {
          if (!sliderRef) return;
        sliderRef.current?.slickNext();
    };

    const previous = () => {
        if (!sliderRef) return;
        sliderRef.current?.slickPrev();
    };
      return (
          <div>
        <div className="container">
          <Slider {...settings} ref={sliderRef}>
        {Array(20).fill(0).map(x => <div>
                <h3>3</h3>
              </div>)}
          </Slider>
        </div>

          </div>
      );
};
