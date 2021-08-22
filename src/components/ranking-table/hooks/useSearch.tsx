import { useState } from 'react';

export function useSearch(initialValue: string) {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  return {
    searchTerm,
    setSearchTerm,
    reset: () => setSearchTerm(''),
  };
}
