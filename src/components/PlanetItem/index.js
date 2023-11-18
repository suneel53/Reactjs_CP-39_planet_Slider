// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details
  return (
    <div className="cont">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="hed">{name}</h1>
      <p className="pp">{description}</p>
    </div>
  )
}

export default PlanetItem
