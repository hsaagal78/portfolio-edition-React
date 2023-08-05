function Header(propsObj) {
    const changePage = (event) => {
      event.preventDefault();
  
      const link = event.target;
      const text = link.innerText;
  
      switch (text) {
        case 'Home':
          propsObj.setPage('home');
          break;
        case 'About me':
          propsObj.setPage('about');
          break;
        case 'Contact':
          propsObj.setPage('contact');
          break;
          case 'Resume':
            propsObj.setPage('resume');
            break;
        default:
          propsObj.setPage('porfolio');
      }
    }
  
    return (
      <header className="row justify-between align-center">
        <h3>HS</h3>
        <nav>
        <a onClick={changePage} className={propsObj.page === 'home' ? 'active' : ''} href="/">Home</a>
          <a onClick={changePage} className={propsObj.page === 'about' ? 'active' : ''} href="/about">About me</a>
          <a onClick={changePage} className={propsObj.page === 'porfolio' ? 'active' : ''} href="/porfolio">Portfolio</a>
          <a onClick={changePage} className={propsObj.page === 'contact' ? 'active' : ''} href="/contact">Contact</a>
          <a onClick={changePage} className={propsObj.page === 'resume' ? 'active' : ''} href="/resume">Resume</a>

        </nav>
      </header>
    )
  }
  
  export default Header;