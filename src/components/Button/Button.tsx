import React from 'react';

interface ButtonProps {
  children: any;
}

export const Button: React.FunctionComponent<ButtonProps> = props => {
  return <button>{props.children}</button>;
};
