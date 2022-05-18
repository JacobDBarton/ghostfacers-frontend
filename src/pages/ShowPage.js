import { useParams } from 'react-router-dom'

function Show(props) {
  console.log(props)
  const { id } = useParams()
  const allLocations = props.lists
  const location = allLocations.find()
  // const people = props.lists
  // const person = people.find(p => p._id === id)

  return (
    <div className="location">
      <h1>Show Page</h1>
        <h2>{location.name}</h2>
        <h2>{location.title}</h2>
        <img src={location.image} alt={location.name} />
    </div>
)
}

export default Show