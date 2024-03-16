import React, { ComponentType, lazy, Suspense } from 'react';

const loadable = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  minLoadTimeMs = 300
) => {
  const LazyComponent = lazy(() =>
    Promise.all([factory(), new Promise((resolve) => setTimeout(resolve, minLoadTimeMs))]).then(
      ([moduleExports]) => moduleExports
    )
  );

  return (props: React.ComponentProps<any>) => (
    <Suspense fallback={'Loading'}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
