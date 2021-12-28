/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Suspense, LazyExoticComponent, ComponentType } from 'react'
import { SpinnerContainer } from '../Component/widget/SpinnerContainer'


//-----------------------|| LOADABLE - LAZY LOADING ||-----------------------//

interface LoaderProps{
}
const Loadable = (Component: LazyExoticComponent<() => JSX.Element> | ComponentType<React.ReactNode>) => (props: LoaderProps) => (
    <Suspense fallback={<SpinnerContainer />}>
        <Component {...props} />
    </Suspense>
)

export default Loadable


//-----------------------|| how  to  used  it ||-----------------------//

// const AuthLogin = Loadable(lazy(() => import('../views/pages/authentication/authentication1/Login1')));
