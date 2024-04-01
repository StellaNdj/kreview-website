import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DramaDetails() {
  const { id } = useParams();
  const { loading, error, data }  = useFetch('http://localhost:1337/api/dramas/' + id);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  const fetchedData = data.data
  const { attributes } = fetchedData;


  return(
    <div key={fetchedData.id} className="view-drama-card">
          <img src={attributes.cover} alt="drama cover"></img>
        <div className="view-drama-infos">
          <h2 className="view-drama-title">{attributes.title}</h2>
          <div className="view-drama-ry">
            <p className="view-drama-rating">{attributes.rating}</p>
            <p className="view-drama-year">{attributes.year}</p>
          </div>
          <p>{attributes.synopsis[0].children[0].text}</p>
        </div>
    </div>

  )
}
