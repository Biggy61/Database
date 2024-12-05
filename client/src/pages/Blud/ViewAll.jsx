import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllBluds } from '../../models/blud'
import ListLink from './ListLink';
export function ViewAll() {
  const [blud, setBluds] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllBluds();
    if(res.status === 500 || res.status === 404) return setLoaded(null);
    if(res.status === 200) {
      setBluds(res.payload);
      setLoaded(true);
    }
  }

  useEffect(() =>{
    load();
  }, [])

  if(isLoaded === null){
    return(
      <>
      <p>blud minus</p>
      </>
    )
  }

  if(!isLoaded){
    return(
      <>
      <p>blud se loadi</p>
      </>
    )
  }

  return (
<>
     <h1>blud list</h1>
     {
      blud.map((blud, index) => (
        <ListLink key={index} {...blud}/>
      ))
     }
     <Link to={"/"}>
     <button>Go back</button>
     </Link>
</>
  )
}
