import { useEffect, useState } from 'react';

export function useMediaQuery({ query }: { query: string }): boolean {
  const mql = window.matchMedia(query);
  const [result, setResult] = useState<boolean>(mql.matches);

  function eventHandler(): void {
    setResult(mql.matches);
  }

  useEffect(() => {
    mql.addEventListener('change', eventHandler);

    return () => {
      mql.removeEventListener('change', eventHandler);
    };
  }, [query]);

  return result;
}
