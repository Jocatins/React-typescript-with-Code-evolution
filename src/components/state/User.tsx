import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Nico",
      email: "titan@gypsy.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return;
  <>
    <div>
      User
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
    </div>
    <h4>User Name - {user?.name}</h4>
    <h4>User Email {user?.email}</h4>
  </>;
};

export default User;
