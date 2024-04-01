import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom'

export default function Reviews() {
  const { loading, error, data }  = useFetch('http://localhost:1337/api/reviews?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const fetchedData = data.data
  return(
    <div>
      {fetchedData.map(review => {
      const { attributes } = review;
      return (
        <div key={review.id} className="review-card">
          <div className="rating">{attributes.rating}</div>
          <h2 className="review-title">{attributes.title}</h2>
          <p>{attributes.body[0].children[0].text}</p>
          <div>
            <h3>{attributes.drama.data.attributes.title}</h3>
          </div>
          <Link to={`/reviews/${review.id}`}>Read more</Link>
        </div>
      );
    })}
    </div>
  )
}
