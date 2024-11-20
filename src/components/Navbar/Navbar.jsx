import { Link } from "react-router-dom";
import Switch from "react-switch";
import { useDarkMode } from "../DarkMode/DarkMode";

export function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-blue-500 dark:bg-gray-800 shadow-md flex justify-between items-center border-b-2 border-gray-300 dark:border-gray-700 p-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-center w-full">
        <div className="flex space-x-4 items-center">
          <Link
            to="/"
            className="text-white dark:hover:text-blue-500 hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            to="/users"
            className="text-white dark:hover:text-blue-500 hover:text-gray-700"
          >
            Users
          </Link>
          <Link
            to="/user"
            className="text-white dark:hover:text-blue-500 hover:text-gray-700"
          >
            User
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="dark:text-white">{darkMode ? "Dark" : "Light"}</span>
        <Switch
          onChange={handleDarkMode}
          checked={darkMode}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
      </div>
    </nav>
  );
}
