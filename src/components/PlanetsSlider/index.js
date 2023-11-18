// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="main-cont" data-testid="planets">
      <h1 className="head">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} details={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
