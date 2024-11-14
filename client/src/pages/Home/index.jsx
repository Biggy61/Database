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
    </>
  )
}
