import { Link, useParams, useNavigate } from "react-router-dom";
import { getBludById, deleteBlud } from "../../models/blud";
import { useState, useEffect } from "react";
export function View() {
  const { id } = useParams();
  const [blud, setBlud] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getBludById(id);
    if (data.status === 500 || data.status === 404) {
      return setLoaded(null);
    }
    if (data.status === 200) {
      setBlud(data.payload);
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
    if (blud.name === formData) {
      const data = await deleteBlud(id);
      if (data.status === 200) return navigate("/");
      return setInfo(data.message);
    }
    setInfo("Wrong input");
  };

  if (isLoaded === null) {
    return (
      <>
        <p>blud minus</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>blud se loadi</p>
      </>
    );
  }
  return (
    <>
      <h1>View blud</h1>
      <p>{id}</p>
      <p>{blud.name}</p>
      <p>{blud.race}</p>
      <p>{blud.gender}</p>
      <form>
        <input
          type="text"
          placeholder="Enter blud name"
          onChange={handleInput}
        />
        <button onClick={handleButton}>Delete blud</button>
        <p>{info}</p>
      </form>
      <Link to={`/update-blud/${id}`}>
      <button>Update blud</button>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
