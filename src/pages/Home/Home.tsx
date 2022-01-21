import React from 'react';
import Button from '../../components/Button';

interface HomeProps {
  children: any;
}

export const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <main>
      <Button>
        <b>A simple button</b>
      </Button>
    </main>
  );
};
