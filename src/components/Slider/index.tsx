import React, { useState, useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import '../../styles/slider.css';
import { useTransition, useSpring, animated } from '@react-spring/web';
import barber2 from "../../images/ryslan.webp";
import barber3 from "../../images/dima.webp";
import barber1 from "../../images/sasha.webp";

const cardData = [
  {
    id: 1,
    name: 'олександр',
    location: 'elder barber',
    imageSrc: barber1,
  },
  {
    id: 2,
    name: 'руслан',
    location: 'barber',
    imageSrc: barber2,
  },
  {
    id: 3,
    name: 'дмитро',
    location: 'young barber',
    imageSrc: barber3,
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1); 
  const cardsWrapperRef = useRef<HTMLDivElement | null>(null);
  const currentCard = cardData[currentIndex];
  const prevCardIndex = (currentIndex - 1 + cardData.length) % cardData.length;
  const nextCardIndex = (currentIndex + 1) % cardData.length;
  const prevCard = cardData[prevCardIndex];
  const nextCard = cardData[nextCardIndex];
  const [isAnimating, setIsAnimating] = useState(false);

  const slideTransitions = useTransition<CardData, SlideTransitionParams>(currentCard, {
    from: {
      opacity: 1,
      transform: `translate3d(${direction === 1 ? '70%' : '-170%'}, -50%, 0) rotateY(${direction === 1 ? '-25deg' : '25deg'}) scale(0.9)`,
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(-50%, -50%, 0) rotateY(0deg) scale(1.2)',
    },
    leave: {
      opacity: 1,
      transform: `translate3d(${direction === 1 ? '-170%' : '70%'}, -50%, 0) rotateY(${direction === 1 ? '25deg' : '-25deg'}) scale(0.9)`,
    },
    config: {
      duration: 500
    },
  });
  
  const slideTransitionsPrev = useTransition<CardData, SlideTransitionParams>(prevCard, {
    from: {
      opacity: 0,
      transform: `translate3d(${direction === 1 ? '-50%' : '70%'}, -50%, 0) rotateY(0deg) scale(${direction === 1 ? '1.2' : '0.6'})`,
    },
    enter: {
      opacity: 0.5,
      transform: 'translate3d(-170%, -50%, 0) rotateY(25deg) scale(0.9)',
    },
    leave: {
      opacity: 0,
      transform: `translate3d(${direction === 1 ? '70%' : '-50%'}, -50%, 0) rotateY(0deg) scale(${direction === 1 ? '0.6' : '1.2'})`,
    },
        config: {
      duration: 500
    },
  });

  const slideTransitionsNext = useTransition<CardData, SlideTransitionParams>(nextCard, {
    from: {
      opacity: 0,
      transform: `translate3d(${direction === 1 ? '-170%' : '-50%'}, -50%, 0) rotateY(0deg) scale(${direction === 1 ? '0.6' : '1.2'})`,
    },
    enter: {
      opacity: 0.5,
      transform: 'translate3d(70%, -50%, 0) rotateY(-25deg) scale(0.9)',
    },
    leave: {
      opacity: 0,
      transform: `translate3d(${direction === 1 ? '-50%' : '-170%'}, -50%, 0) rotateY(0deg) scale(${direction === 1 ? '1.2' : '0.6'})`,
    },
        config: {
      duration: 500
    },
  });

  const infoTransitionsCurrent = useTransition(currentCard, {
    from: {
      opacity: 0,
      transform: 'translateY(100px)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(-10px)',
    },
    leave: {
      opacity: 0,
      transform: `translateY(-300px)`,
    },
    config: {
      duration: 200
    },
  });

  const { opacity, transform } = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(300px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
      duration: 1000,
  });

  const nextSlide = () => {
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex(nextCardIndex);
  
    setTimeout(() => {
      setIsAnimating(false);
    console.log("hhhh")
    }, 1000);
  };
  
  const prevSlide = () => {
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex(prevCardIndex);
  
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };  

  return (
      <animated.div style={{ opacity, transform }} className="app-slider barberrs" key='name_wrapper'>
        <p className='section-slider-name'>
          БАРБЕРИ
        </p>
        <div className="cardList">
          {<button className="cardList__btn btn btn--left" onClick={nextSlide} disabled={isAnimating}>
            <div className="icon">
              <FiArrowLeft color='white' />
            </div>
          </button>}
          <div className="cards__wrapper" ref={cardsWrapperRef}>
            {slideTransitions(( props, item )  => (
              item && (
                <animated.div style={props} className='card current--card' key={item.id}>
                  <div className="card__image">
                  <img src={item.imageSrc} alt={item.name} />
                  </div>
                </animated.div>
              )
            ))}
            {slideTransitionsPrev(( props, item )  => (
              item && (
                <animated.div style={props} className='card previous--card' key={item.id}>
                  <div className="card__image">
                  <img src={item.imageSrc} alt={item.name} />
                  </div>
                </animated.div>
              )
            ))}
            {slideTransitionsNext(( props, item )  => (
              item && (
                <animated.div style={props} className='card next--card' key={item.id}>
                  <div className="card__image">
                  <img src={item.imageSrc} alt={item.name} />
                  </div>
                </animated.div>
              )
            ))}
          </div>
          <button className="cardList__btn btn btn--right" onClick={prevSlide} disabled={isAnimating}>
            <div className="icon">
              <FiArrowRight color='white' />
            </div>
          </button>
        </div>
          {infoTransitionsCurrent((props, item) => (
          item && <animated.div style={props} className='infoList' key='info_wrapper'>
            <div className="info__wrapper">
            <div className={`info current--info`}>
              <h2 className="text name">{currentCard.name}</h2>
              <h4 className="text location">{currentCard.location}</h4>
            </div>
          </div>
        </animated.div> 
        ))}
      </animated.div>
  );
}

export default App;
