import { Link, useParams, useNavigate } from "react-router-dom";
import { getProgrammerById, deleteProgrammer } from "../../models/programmer";
import { useState, useEffect } from "react";
export function View() {
  const { id } = useParams();
  const [programmer, setProgrammer] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
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

  const handleInput = (e) => {
    setFormData(e.target.value);
  };

  const handleButton = async (e) => {
    e.preventDefault();
    if (programmer.name === formData) {
      const data = await deleteProgrammer(id);
      if (data.status === 200) return navigate("/");
      return setInfo(data.message);
    }
    setInfo("Wrong input");
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
      <h1>View programmer</h1>
      <p>{id}</p>
      <p>{programmer.name}</p>
      <p>{programmer.surname}</p>
      <p>{programmer.programmingLanguage}</p>
      <p>{programmer.salary}</p>
      <form>
        <input
          type="text"
          placeholder="Enter programmer name"
          onChange={handleInput}
        />
        <button onClick={handleButton}>Delete programmer</button>
        <p>{info}</p>
      </form>
      <Link to={`/update-programmer/${id}`}>
      <button>Update programmer</button>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
