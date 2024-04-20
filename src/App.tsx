// * Base
import { Outlet } from 'react-router';

// * Components
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
