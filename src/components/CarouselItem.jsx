const CarouselItem = ({picture}) => {
  return (
    <div className='carousel-item'>
      <img className='carousel-img' src={picture.image} alt="me" />
    </div>
  )
}

export default CarouselItem
