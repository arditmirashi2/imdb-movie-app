import React from 'react';
import Button from '../../components/Button';

interface HomeProps {
  children: any;
}

export const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <main>
      <h1>The home page</h1>
      <Button>
        <b>A simple button</b>
      </Button>
    </main>
  );
};
