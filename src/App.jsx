import React from "react";
import Routes from "./routes";

import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
