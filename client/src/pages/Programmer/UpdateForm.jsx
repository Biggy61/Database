import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateProgrammer, getProgrammerById } from "../../models/programmer";

export function UpdateForm() {
  const { id } = useParams();
  const [programmer, setProgrammer] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getProgrammerById(id);
    if (data.status === 500 || data.status === 404) {
      return setLoaded(null);
    }
    if (data.status === 200) {
      setProgrammer(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const sendData = async () => {
    const res = await updateProgrammer(id, formData);
    if (res.status == 200) return navigate(`/view-programmer/${res.payload._id}`);
    setInfo(res.message);
  };

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleButton = (e) => {
    e.preventDefault();
    sendData();
  };

  if (isLoaded === null) {
    return (
      <>
        <p>programmer minus</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>programmer se loadi</p>
      </>
    );
  }

  return (
    <>
    <h1>Update programmer</h1>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={programmer.name}
        />
        <input
          type="text"
          name="surname"
          placeholder="Enter surname"
          required
          onChange={handleInput}
          defaultValue={programmer.surname}
        />
        <input
          type="text"
          name="programmingLanguage"
          placeholder="Enter programmingLanguage"
          required
          onChange={handleInput}
          defaultValue={programmer.programmingLanguage}
        />
        <input
          type="number"
          name="salary"
          placeholder="Enter salary"
          required
          onChange={handleInput}
          defaultValue={programmer.programmingLanguage}
        />
        <button onClick={handleButton}>
         Update programmer
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
      <p>Go back</p>
      </Link>
    </>
  );
}
