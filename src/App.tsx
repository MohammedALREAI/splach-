import Providers from './Provider'
import { AllRouter } from './Router'
import { MainContainer } from './Component/widget/Section'
import ErrorBoundary from './Component/ErrorBoundary/ErrorBoundary'
import { Suspense } from 'react'
import { SpinnerContainer } from './Component/widget/SpinnerContainer'
import { NavLinkWrapper } from './Component/widget/Nav/NavLinkWrapper'
import { Header } from './Component/Header/Header'
import Loadable from './Hoc/Loadable'
import { Image } from './Component/widget/Image'
import logo from './unsplash.png'
function App() {
  return (
    <Suspense fallback={<SpinnerContainer />}>
        <Image src={logo} />
    </Suspense>
//     <Providers>
//             <MainContainer>
//               sds
//                  {/* <Suspense fallback={ <SpinnerContainer/>}>
//                          <ErrorBoundary>
// xzd
//                     <AllRouter />
//                 </ErrorBoundary>
//                 </Suspense> */}

//       </MainContainer>
//     </Providers>
  )
}

export default App
