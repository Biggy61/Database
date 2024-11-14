import React from 'react'
import { useParams, Link } from 'react-router-dom';

export function Created() {
     const {id} = useParams();

  return (
    <>
        <h1>New monkey was added: {id}</h1>
        <Link to={`/view-monkey/${id}`}>
        <p>View monkey</p>
        </Link>
        <Link to={`/`}>
          Return to home page
        </Link>
    </>
  )
}
