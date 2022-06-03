import React, { useRef } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import routes from './routes/routes';
import { Layout, Affix } from 'antd';

const { Header, Content } = Layout;

function App() {
  const navigate = useNavigate();
  const renderRoutes = useRoutes(routes);

  return (
    <div className="App">
      <Layout>
        <Affix>
          <Header>
            <h1
              style={{ color: 'white', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              Movie library
            </h1>
          </Header>
        </Affix>
        <Content>{renderRoutes}</Content>
      </Layout>
    </div>
  );
}

export default App;
