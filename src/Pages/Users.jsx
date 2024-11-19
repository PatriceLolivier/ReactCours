import axios from "axios";
import { useState, useEffect } from "react";

export function Users() {
    const [ users, setUsers ] = useState([]); 
    const [ loading, setLoading ] = useState(true); 
    const ApiURL = "https://jsonplaceholder.org/users";

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

    return (<div className="mt-4">
        <h1 className="mb-2 font-bold">Liste des emails des utilisateurs :</h1>
        <ul className="m-2">
            { users.map((user) => (
                <li key={user.id}> { user.email }</li>
            ))}
        </ul>
    </div>)
}