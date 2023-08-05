import { useState } from 'react';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const [page, setPage] = useState('landing');

  const handlePageView = () => {

    switch (page) {
      case 'landing':
        return <Landing />;
      case 'about':
        return <About />;
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