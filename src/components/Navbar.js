import React,{useEffect} from 'react';
import './navbar.scss';
import Logo from './../img/logo.svg';

const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
  return (
    <header className={x.join(" ")}>
        <div className="logo">
          <img src={Logo} alt="Logo" title="Logo" />
        </div>

        <nav className="navigation">
            <ul>
              <li><a href="#post1">Home</a></li>
              <li><a href="#post2">Home</a></li>
              <li><a href="#post3">Home</a></li>
              <li><a href="#post4">Home</a></li>
            </ul>
        </nav>

    </header>
  )
};

export default Navbar;
