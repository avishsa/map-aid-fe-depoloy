import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { history } from '../../helps/history';
function ScrollToTop() {
  
  useEffect(() => {    
    const unlisten = history.listen(() => { window.scrollTo(0, 0); });
    return () => { unlisten(); };
  }, []);
  return (null);
}

export default withRouter(ScrollToTop);