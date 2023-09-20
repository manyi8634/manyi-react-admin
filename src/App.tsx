import { memo,Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import RouterView from '@/router';
import Loading from '@/components/loading';

export default memo(function App() {
  return (
    <div id="app">
      <Router>
        <Suspense fallback={ <Loading/> }>
          <RouterView/>
        </Suspense>
      </Router>
    </div>
  )
})
