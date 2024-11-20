import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./Pages/Home";
import { Users } from "./Pages/Users";
import { User } from "./Pages/User";
import { DarkModeProvider } from "./components/DarkMode/DarkMode";
import { Provider } from "react-redux";
import { store } from "./App/store";
import { Counter } from "./components/Counter/Counter";

export function App() {
  return (
    <DarkModeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/users" Component={Users} />
            <Route path="user" Component={User} />
            <Route path="/user/:id" Component={User} />
            <Route path="/counter" Component={Counter} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </DarkModeProvider>
  );
}
