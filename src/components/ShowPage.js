import { useParams } from 'react-router-dom'

function Show(props) {
  console.log(props)
  const { id } = useParams()
  const people = props.lists
  const person = people.find(p => p._id === id)

  return (
      <div className="person">
        <h1>Show Page</h1>
          <h2>{person.name}</h2>
          <h2>{person.title}</h2>
          <img src={person.image} alt={person.name} />
      </div>
  )
}

export default Show