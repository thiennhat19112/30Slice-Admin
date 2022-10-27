import { Outlet } from 'react-router-dom';
import Header from '../components/layout/header';
import Sidebar from '../components/layout/sidebar';
import Footer from '../components/layout/footer';
import Spin from '../components/layout/spin';

function App() {
  if(false) {
    
  }


  return (
    <>
      <Header />
      <main className="main-content">
        <Sidebar />
        <div className="contents">
          <Outlet />
        </div>
        <Footer />
      </main>
      <Spin />
    </>
  );
}

export default App;
