import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createProgrammer } from "../../models/programmer";

export function CreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const sendData = async () => {
    const res = await createProgrammer(formData);
    if (res.status == 201) return navigate(`/created-programmer/${res.payload._id}`);
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
          name="surname"
          placeholder="Enter surname"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          name="programmingLanguage"
          placeholder="Enter programmingLanguage"
          required
          onChange={handleInput}
        />
        <input
          type="number"
          name="salary"
          placeholder="Enter salary"
          required
          onChange={handleInput}
        />
        <button onClick={handleButton}>
         Add new programmer
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
      <p>Go back</p>
      </Link>
    </>
  );
}