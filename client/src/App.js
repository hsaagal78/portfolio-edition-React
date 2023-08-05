import { useState } from 'react';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Porfolio from './pages/Porfolio';

function App() {
  const [page, setPage] = useState('home');

  const handlePageView = () => {

    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'porfolio':
          return <Porfolio />;  
        case 'resume':
          return <Resume />;
      default:
        return <Contact />
    }
  }

  return (
    <>
      <Header page={page} setPage={setPage} />

      {handlePageView()}

      <Footer />
    </>
  );
}

export default App;