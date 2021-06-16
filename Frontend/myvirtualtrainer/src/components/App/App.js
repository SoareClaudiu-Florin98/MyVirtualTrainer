import React,{ useState, useEffect} from "react";
import Main from "../Main";
import Navbar from "../Navbar";
import { getUser } from "../../api";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = () => {
      setIsLoggedIn(true);
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
  };

useEffect(() => {
    getUser().then(data => {
        if (!data) return;
        setUserData(data);
    });
}, []);

useEffect(() => {
  if (userData) {
      setIsLoggedIn(true);
  } else {
      setIsLoggedIn(false);
  }
}, [userData]);
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Main 
          userId={userData ? userData.id : ""}
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
/>
    </div>
  );
}

export default App;
