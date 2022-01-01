import { Layout } from 'Layouts/layout';
import Providers from './Provider';
import { AllRouter } from './Router';

function App() {
  return (
    <Providers>
                  {/* <Header/> */}

      <Layout children={<AllRouter/>}/>
    </Providers>
  );
}

export default App;
