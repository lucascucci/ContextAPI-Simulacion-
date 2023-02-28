import Navbar from "./components/Nabvar";
import MovieList from "./components/MovieList";
import UserContext from "./context/UserContext";
import React, { useState } from "react";


const initialUser = null;

function App() {
  const [user, setUser] = useState(initialUser); // las funciones de login y logout harian una peticion a la api.

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const data = { user, login, logout };

  return (
    <div className="App">
      <UserContext.Provider value={data}>
        <Navbar />
        <MovieList />
      </UserContext.Provider>
    </div>
  );
}

export default App;
