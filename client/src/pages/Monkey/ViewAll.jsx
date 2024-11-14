import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllMonkeys } from '../../models/monkey'
export function ViewAll() {
  const [monkey, setMonkeys] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllMonkeys();
    if(res.status === 500 || res.status === 404) return setLoaded(null);
    if(res.status === 200) {
      setMonkeys(true.payload);
      setLoaded(true);
    }
  }

  useEffect(() =>{
    load();
  }, [])

  if(isLoaded === null){
    return(
      <>
      <p>opicky minus</p>
      </>
    )
  }

  if(!isLoaded){
    return(
      <>
      <p>opicky se loadi</p>
      </>
    )
  }

  return (
<>
     <h1>Monkey list</h1>
</>
  )
}
