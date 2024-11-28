import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateBohata, getBohataById } from "../../models/bohata";

export function UpdateForm() {
  const { id } = useParams();
  const [bohata, setBohata] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getBohataById(id);
    if (data.status === 500 || data.status === 404) {
      return setLoaded(null);
    }
    if (data.status === 200) {
      setBohata(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const sendData = async () => {
    const res = await updateBohata(id, formData);
    if (res.status == 200) return navigate(`/view-bohata/${res.payload._id}`);
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
        <p>bohata minus</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>bohata se loadi</p>
      </>
    );
  }

  return (
    <>
    <h1>Update bohata</h1>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={bohata.name}
        />
        <input
          type="text"
          name="race"
          placeholder="Enter race"
          required
          onChange={handleInput}
          defaultValue={bohata.race}
        />
        <input
          type="text"
          name="gender"
          placeholder="Enter gender"
          required
          onChange={handleInput}
          defaultValue={bohata.gender}
        />
        <button onClick={handleButton}>
         Update bohata
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
      <p>Go back</p>
      </Link>
    </>
  );
}
