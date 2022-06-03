import React, { Suspense } from 'react';
import LoadingComponent from '../../LoadingComponent';

interface CostumLoadableProps {
  loader: any;
}

export function CustomLoadable(opts: CostumLoadableProps) {
  const LazyComponent = React.lazy(opts.loader);

  return (
    <Suspense fallback={<LoadingComponent />}>
      <LazyComponent />
    </Suspense>
  );
}
