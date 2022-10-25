import { Outlet } from 'react-router-dom';
import Header from '../components/layout/header';
import Sidebar from '../components/layout/sidebar';

function App() {
  return (
    <>
      <Header />
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
