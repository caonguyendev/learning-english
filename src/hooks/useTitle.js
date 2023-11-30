import { useEffect, useState } from 'react';

// set title for component
function useTitle(title = 'EngloLearn', isOverride = false) {
  useEffect(() => {
    if (isOverride) {
      document.title = title;
    } else {
      document.title = title !== 'EngloLearn' ? `${title} - EngloLearn` : title;
    }
  }, []);

  return null;
}

export default useTitle;
