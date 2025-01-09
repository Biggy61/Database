import React from 'react'
import { useParams, Link } from 'react-router-dom';

export function Created() {
     const {id} = useParams();

  return (
    <>
        <h1>New programmer was added: {id}</h1>
        <Link to={`/view-programmer/${id}`}>
        <p>View programmer</p>
        </Link>
        <Link to={`/`}>
          Return to home page
        </Link>
    </>
  )
}
