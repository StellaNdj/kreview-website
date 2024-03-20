import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data }  = useFetch('http://localhost:1337/api/reviews')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const fetchedData = data.data
  return(
    <div>
      {fetchedData.map(review => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2 className="review-title">{review.attributes.title}</h2>
          <p>{review.attributes.body[0].children[0].text}</p>
          <Link to={`/reviews/${review.id}`}>Read more</Link>
        </div>
    ))}
    </div>
  )
}
