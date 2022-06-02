import React, {Suspense} from 'react';
import {Spin} from 'antd';

interface CostumLoadableProps {
    loader: any
}

export function CustomLoadable(opts: CostumLoadableProps) {
  const LazyComponent = React.lazy(opts.loader);

  return <Suspense fallback={<Spin />}>
      <LazyComponent />
  </Suspense>
}