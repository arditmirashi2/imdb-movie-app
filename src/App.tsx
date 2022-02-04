import React from "react";
import {useRoutes} from 'react-router-dom';
import routes from "./routes/routes";

function App() {
  const renderRoutes = useRoutes(routes);
  return <div className="App">
    {renderRoutes}
  </div>;
}

export default App;
