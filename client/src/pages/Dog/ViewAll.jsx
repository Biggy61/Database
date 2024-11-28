import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllDogs } from '../../models/dog'
import ListLink from './ListLink';
export function ViewAll() {
  const [dogs, setDogs] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllDogs();
    if(res.status === 500 || res.status === 404) return setLoaded(null);
    if(res.status === 200) {
      setDogs(res.payload);
      setLoaded(true);
    }
  }

  useEffect(() =>{
    load();
  }, [])

  if(isLoaded === null){
    return(
      <>
      <p>dogy minus</p>
      </>
    )
  }

  if(!isLoaded){
    return(
      <>
      <p>dogy se loadi</p>
      </>
    )
  }

  return (
<>
     <h1>Dog list</h1>
     {
      dogs.map((dog, index) => (
        <ListLink key={index} {...dog}/>
      ))
     }
     <Link to={"/"}>
     <button>Go back</button>
     </Link>
</>
  )
}
