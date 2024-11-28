import { Link, useParams, useNavigate } from "react-router-dom";
import { getDogById, deleteDog } from "../../models/dog";
import { useState, useEffect } from "react";
export function View() {
  const { id } = useParams();
  const [dog, setDog] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getDogById(id);
    if (data.status === 500 || data.status === 404) {
      return setLoaded(null);
    }
    if (data.status === 200) {
      setDog(data.payload);
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
    if (dog.name === formData) {
      const data = await deleteDog(id);
      if (data.status === 200) return navigate("/");
      return setInfo(data.message);
    }
    setInfo("Wrong input");
  };

  if (isLoaded === null) {
    return (
      <>
        <p>dogy minus</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>dogy se loadi</p>
      </>
    );
  }
  return (
    <>
      <h1>View dog</h1>
      <p>{id}</p>
      <p>{dog.name}</p>
      <p>{dog.race}</p>
      <p>{dog.gender}</p>
      <form>
        <input
          type="text"
          placeholder="Enter dog name"
          onChange={handleInput}
        />
        <button onClick={handleButton}>Delete dog</button>
        <p>{info}</p>
      </form>
      <Link to={`/update-dog/${id}`}>
      <button>Update dog</button>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
