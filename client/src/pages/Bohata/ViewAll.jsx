import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllBohatas } from '../../models/bohata'
import ListLink from './ListLink';
export function ViewAll() {
  const [bohatas, setBohatas] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllBohatas();
    if(res.status === 500 || res.status === 404) return setLoaded(null);
    if(res.status === 200) {
      setBohatas(res.payload);
      setLoaded(true);
    }
  }

  useEffect(() =>{
    load();
  }, [])

  if(isLoaded === null){
    return(
      <>
      <p>bohatas minus</p>
      </>
    )
  }

  if(!isLoaded){
    return(
      <>
      <p>bohatas se loadi</p>
      </>
    )
  }

  return (
<>
     <h1>bohatas list</h1>
     {
      bohatas.map((bohata, index) => (
        <ListLink key={index} {...bohata}/>
      ))
     }
     <Link to={"/"}>
     <button>Go back</button>
     </Link>
</>
  )
}
