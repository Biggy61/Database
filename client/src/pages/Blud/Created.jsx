import React from 'react'
import { useParams, Link } from 'react-router-dom';

export function Created() {
     const {id} = useParams();

  return (
    <>
        <h1>New blud was added: {id}</h1>
        <Link to={`/view-blud/${id}`}>
        <p>View blud</p>
        </Link>
        <Link to={`/`}>
          Return to home page
        </Link>
    </>
  )
}
