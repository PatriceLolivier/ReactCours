import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav className="flex justify-center gap-4 bg-blue-500 p-4 text-white">
            <Link to="/">Accueil</Link> | <Link to="/users">Users</Link>
        </nav>
    )
}