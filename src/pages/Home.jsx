import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import CarouselItem from '../components/CarouselItem';

function Home() {

  const [activeIndex, setActiveIndex] = useState(0);

  const pictures = [
    {
      index: "1",
      image: require('../Media/me.JPG')
    },
    {
      index: "2",
      image: require('../Media/Certifications.png')
    },
    {
      index: "3",
      image: require('../Media/Nashville.jpg')
    },
    {
      index: "4",
      image: require('../Media/NurseToCode.png')
    },
  ]

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = pictures.length-1;
    } else if (newIndex >= pictures.length){
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className='main'>
        <div className='main-intro'>
            <div className='main-head'>Hello there</div>
        </div>

        <div className='main-bottom'>
          <button className="left" onClick={() => {updateIndex(activeIndex-1)}}><FontAwesomeIcon icon={faArrowLeft} /></button>
          <div className='main-carousel'>
            <div className='main-inner'
                style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
              {pictures.map((picture)=> {
                return <CarouselItem picture={picture} />;
              })}
            </div>
          </div>
          <button className="right" onClick={() => {updateIndex(activeIndex+1)}}><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>

        <div className='main-mobile'>
          <div className='main-mobile-inner'
                  style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                {pictures.map((picture)=> {
                  return <CarouselItem picture={picture} />;
                })}
          </div>
        </div>

        <div className='main-end'>
          <div>My name is Klhee Jacobs, a web developer based in Nashville, TN</div>
          <div>I am passionate about developing user-friendly and efficient code and would love to work with you!</div>
        </div>
    </div>
  )
}

export default Home
