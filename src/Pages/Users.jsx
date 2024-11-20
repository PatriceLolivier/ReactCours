import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Users() {
    const [ users, setUsers ] = useState([]); 
    const [ loading, setLoading ] = useState(true); 
    const ApiURL = "https://jsonplaceholder.org/users";
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(ApiURL)
                setUsers(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (loading)
        return (<p>Chargement des utilisateurs en cours ...</p>)

    return (<div className="dark:bg-gray-800 dark:text-white min-h-screen">
        <h1 className="mb-2 font-bold">Liste des emails des utilisateurs :</h1>
        <ul className="m-2">
            { users.map((user) => (
                <li key={user.id}
                className="cursor-pointer hover:text-blue-500"
                onClick={() => navigate(`/user/${user.id}`)}
                >{ user.email }</li>
            ))}
        </ul>
    </div>)
}