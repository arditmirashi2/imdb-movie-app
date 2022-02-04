import React, {Suspense} from 'react';

interface CostumLoadableProps {
    loader: any
}

export function CustomLoadable(opts: CostumLoadableProps) {
  const LazyComponent = React.lazy(opts.loader);

  return <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
  </Suspense>
}