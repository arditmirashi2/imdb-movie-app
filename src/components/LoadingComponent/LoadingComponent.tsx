import React, { useEffect } from 'react';
import ProgressBar from '../ProgressBar';

export function LoadingComponent() {
  useEffect(() => {
    ProgressBar.start();
    return () => {
      ProgressBar.done();
    };
  }, []);

  return <div />;
}
