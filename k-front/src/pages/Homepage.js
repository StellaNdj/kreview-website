import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data }  = useFetch('http://localhost:1337/api/dramas')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const fetchedData = data.data
  return(
    <div className="drama-grid">
      {fetchedData.map(drama => (
        <div key={drama.id} className="homepage-drama-card">
          <Link to={`/dramas/${drama.id}`} className="homepage-drama-link-img">
            <img src={drama.attributes.cover} alt="drama cover"></img>
          </Link>
          <h2 className="homepage-drama-title">{drama.attributes.title}</h2>
          <div className="homepage-drama-infos">
            <p className="homepage-drama-rating">{drama.attributes.rating}</p>
            <p className="homepage-drama-year">{drama.attributes.year}</p>
            <Link to={`/dramas/${drama.id}`} className="homepage-drama-link">More</Link>
          </div>
        </div>
    ))}
    </div>
  )
}
