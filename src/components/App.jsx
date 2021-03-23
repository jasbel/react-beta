import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from './views/Loader';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import 'react-toastify/scss/main.scss'

function App({children}) {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowLoader(false)
    }, 1000);
  }, [])

  return (
    <>
      {
        showLoader ?
        <Loader show = {showLoader} />
        :
        <>
          <Header />
          <div>
            <Sidebar />
            
            <div>{children}</div>
            <Footer />
          </div>

          <ToastContainer />
        </>
      }
      
    </>
  );
}

export default App;
