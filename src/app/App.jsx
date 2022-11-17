import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/layout/header';
import Sidebar from '../components/layout/sidebar';
import Footer from '../components/layout/footer';
import Spin from '../components/layout/spin';
import { clearMessage } from '../app/slices/message';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

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
