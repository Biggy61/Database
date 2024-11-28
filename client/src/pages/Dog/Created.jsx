import React from 'react'
import { useParams, Link } from 'react-router-dom';

export function Created() {
     const {id} = useParams();

  return (
    <>
        <h1>New dog was added: {id}</h1>
        <Link to={`/view-dog/${id}`}>
        <p>View dog</p>
        </Link>
        <Link to={`/`}>
          Return to home page
        </Link>
    </>
  )
}
