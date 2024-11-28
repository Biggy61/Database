import React from 'react'
import { useParams, Link } from 'react-router-dom';

export function Created() {
     const {id} = useParams();

  return (
    <>
        <h1>New bohata was added: {id}</h1>
        <Link to={`/view-bohata/${id}`}>
        <p>View bohata</p>
        </Link>
        <Link to={`/`}>
          Return to home page
        </Link>
    </>
  )
}
