import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <h1>Bohata</h1>
    <Link to={"/create-monkeys"}>
    <p>Add new monkey</p>
    </Link>
    <Link to={"/view-monkeys"}>
    <p>Monkeys</p>
    </Link>
    <h1>Bohata dog</h1>
    <Link to={"/create-dogs"}>
    <p>Add new dog</p>
    </Link>
    <Link to={"/view-dogs"}>
    <p>Dogs</p>
    </Link>
    <h1>blud Bohata</h1>
    <Link to={"/create-bohatas"}>
    <p>Add new bohata</p>
    </Link>
    <Link to={"/view-bohatas"}>
    <p>Bohatas</p>
    </Link>
    <h1>blud</h1>
    <Link to={"/create-bluds"}>
    <p>Add new blud</p>
    </Link>
    <Link to={"/view-bluds"}>
    <p>bluds</p>
    </Link>

    <h1>programmer</h1>
    <Link to={"/create-programmers"}>
    <p>Add new programmer</p>
    </Link>
    <Link to={"/view-programmers"}>
    <p>programmers</p>
    </Link>
    </>
  )
}
