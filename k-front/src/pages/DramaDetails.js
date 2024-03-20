import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DramaDetails() {
  const { id } = useParams()
  console.log(id)
  const { loading, error, data }  = useFetch('http://localhost:1337/api/dramas/' + id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  const fetchedData = data.data

  return(
    <div key={fetchedData.id} className="drama-card">
        <img src={fetchedData.attributes.cover} alt="drama cover" height={250} width={200}></img>
        <h2 className="drama-title">{fetchedData.attributes.title}</h2>
        <p className="drama-rating">{fetchedData.attributes.rating}</p>
        <p className="drama-year">{fetchedData.attributes.year}</p>
        <p>{fetchedData.attributes.synopsis[0].children[0].text}</p>
    </div>

  )
}
