import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data }  = useFetch('http://localhost:1337/api/dramas')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const fetchedData = data.data
  return(
    <div>
      {fetchedData.map(drama => (
        <div key={drama.id} className="drama-card">
          <img src={drama.attributes.cover} alt="drama cover" height={250} width={200}></img>
          <h2 className="drama-title">{drama.attributes.title}</h2>
          <p className="drama-rating">{drama.attributes.rating}</p>
          <p className="drama-year">{drama.attributes.year}</p>
          <Link to={`/dramas/${drama.id}`}>Read more</Link>
        </div>
    ))}
    </div>
  )
}
