import React from "react";
import {useRoutes} from 'react-router-dom';
import routes from "./routes/routes";
import {Layout} from 'antd';

const {Header, Content} = Layout;

function App() {
  const renderRoutes = useRoutes(routes);
  return <div className="App">
    <Layout>
      <Header />

      <Content>
    {renderRoutes}
    </Content>
    </Layout>
  </div>;
}

export default App;
