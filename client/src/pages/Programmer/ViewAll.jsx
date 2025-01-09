import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllProgrammers } from '../../models/programmer'
import ListLink from './ListLink';
export function ViewAll() {
  const [programmers, setProgrammers] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllProgrammers();
    console.log(res.payload)
    if(res.status === 500 || res.status === 404) return setLoaded(null);
    if(res.status === 200) {
      setProgrammers(res.payload);
      setLoaded(true);
    }
  }

  useEffect(() =>{
    load();
  }, [])

  if(isLoaded === null){
    return(
      <>
      <p>programmer minus</p>
      </>
    )
  }

  if(!isLoaded){
    return(
      <>
      <p>programmer se loadi</p>
      </>
    )
  }

  return (
<>
     <h1>programmer list</h1>
     {
      programmers.map((programmer, index) => (
        <ListLink key={index} {...programmer}/>
      ))
     }
     <Link to={"/"}>
     <button>Go back</button>
     </Link>
</>
  )
}
