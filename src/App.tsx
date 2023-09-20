import { memo,Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import RouterView from '@/router';

export default memo(function App() {
  return (
    <div id="app">
      <Router>
        <Suspense>
          <RouterView/>
        </Suspense>
      </Router>
    </div>
  )
})
