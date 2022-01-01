
import { Suspense } from 'react';
import { SpinnerContainer } from './Component/widget/SpinnerContainer';
// import { NavLinkWrapper } from './Component/widget/Nav/NavLinkWrapper'
// import { Header } from './Component/Header/Header'

import Home from './pages/Home';
function App() {
  return (
    <Suspense fallback={<SpinnerContainer />}>
        <Home />
    </Suspense>

  );
}

export default App;
