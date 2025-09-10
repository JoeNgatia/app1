import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegister, setShowRegister] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 px-4">
      {/* px-4 ensures space from screen edges */}
      {!loggedInUser && (
        <>
          {showRegister ? (
            <Register switchToLogin={() => setShowRegister(false)} />
          ) : (
            <Login
              onLogin={setLoggedInUser}
              switchToRegister={() => setShowRegister(true)}
            />
          )}
        </>
      )}

      {loggedInUser && (
        <Dashboard
          user={loggedInUser}
          onLogout={() => setLoggedInUser(null)}
        />
      )}
    </div>
  );
}

export default App;
