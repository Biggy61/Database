import React from 'react'
import { Link } from 'react-router-dom'

export default function ListLink(props) {
  return (
    <>
    <Link to={`/view-dog/${props._id}`}>
     <p>{props.name}</p>
    </Link>
    </>
  )
}
