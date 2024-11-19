import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./Pages/Home"
import { Users } from "./Pages/Users"
import { User } from "./Pages/User"

export function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/users" Component={Users} />
                <Route path="user" Component={User}/>    
                <Route path="/user/:id" Component={User} />
            </Routes>
        </BrowserRouter>
    )
}