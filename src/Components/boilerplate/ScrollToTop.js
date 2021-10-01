import { useEffect } from 'react';

import { history } from '../../helps/history';
function ScrollToTop() {
  
  useEffect(() => {    
    const unlisten = history.listen(() => { window.scrollTo(0, 0); });
    return () => { unlisten(); };
  }, []);
  return (null);
}

export default ScrollToTop;