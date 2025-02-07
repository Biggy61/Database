import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBlud } from "../../models/blud";

export function CreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const sendData = async () => {
    const res = await createBlud(formData);
    if (res.status == 201) return navigate(`/created-blud/${res.payload._id}`);
    setInfo(res.message);
  };

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleButton = (e) => {
    e.preventDefault();
    sendData();
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          name="race"
          placeholder="Enter race"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          name="gender"
          placeholder="Enter gender"
          required
          onChange={handleInput}
        />
        <button onClick={handleButton}>
         Add new button
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
      <p>Go back</p>
      </Link>
    </>
  );
}
