// * Base
import { useCallback, useEffect } from 'react';

// * Helpers
import BASE from '../helpers/base';

const useTitle = ({ title }: { title: string }) => {
  // document.title = BASE.title + '|' + title;

  const handleVisibilityChange = useCallback(() => {
    document.title = document.hidden
      ? `${BASE.title} | Come back!`
      : BASE.title + (title ? ' | ' + title : '');
  }, [title]);

  useEffect(() => {
    handleVisibilityChange();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [title, handleVisibilityChange]);

  return title;
};

export default useTitle;
