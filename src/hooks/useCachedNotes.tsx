import { useEffect, useState } from 'react';

const useCachedNotes = () => {
  const [cachedNotes, setCachedNotes] = useState<string | undefined>();

  const handleSetCachedNotes = (notes: string) => {
    setCachedNotes(notes);
    localStorage.setItem('notes', notes);
  };

  const handleClearCachedNotes = () => {
    setCachedNotes(undefined);
  };

  useEffect(() => {
    const cachedNotes = localStorage.getItem('notes');
    if (cachedNotes) {
      setCachedNotes(cachedNotes);
    }
  }, []);

  return { cachedNotes, handleSetCachedNotes, handleClearCachedNotes };
};

export default useCachedNotes;
