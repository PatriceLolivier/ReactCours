import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [inputId, setInputId] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const ApiURL = "https://jsonplaceholder.org/users";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setError(null); 
        const response = await axios.get(`${ApiURL}/${id}`);
        if (response.data) {
          console.table(response.data);
          setUser(response.data);
        } else {
          setError("Utilisateur non trouvé");
        }
      } catch (err) {
        console.error("Erreur de fetch:", err);
        setError("Utilisateur non trouvé");
        setUser(null);
      }
    };

    if (id) fetchUser();
    return () => {
      setUser(null);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputId) {
      navigate(`/user/${inputId}`);
    }
  };

  if (!user)
    return (
      <div className="min-h-screen flex flex-col dark:bg-gray-800 dark:text-white">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}
        className="flex items-center justify-center mt-4"
        >
          <label className="text-lg font-bold">
            Id souhaité:
            <input 
              type="number" 
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
              className="border-2 border-gray-300 rounded-md p-1 ml-2 text-black" 
            />
          </label>
          <input 
            type="submit" 
            value="Submit" 
            className="cursor-pointer ml-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          />
        </form>
      </div>
    );

  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-gray-800 dark:text-white">
      <div className="border-2 mt-4 border-blue-300 rounded-md p-4 dark:border-blue-500 dark:bg-gray-700">
        <h2>User : {id}</h2>
        <p>Prénom : {user.firstname}</p>
        <p>Nom : {user.lastname}</p>
        <p>Email : {user.email}</p>
        <p>Téléphone : {user.phone}</p>
      </div>
    </div>
  );
}
