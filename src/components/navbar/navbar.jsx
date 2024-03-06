import React, { useState ,useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

function navbar() {

  const [sticky ,setStycky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setStycky(true):setStycky(false);
      
    })
  })

const [mobileMenu , setmobileMenu]=useState(false)

const toggleMenu=()=>{
  mobileMenu?setmobileMenu(false):setmobileMenu(true);
}

  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu?'':'hide-menu'}>
<li>  <Link to='Hero' offset={0} smooth={true} >Home</Link>  </li>
<li><Link to='programs' offset={-260} smooth={true}  >Program</Link></li>
<li><Link to='about' offset={-150} smooth={true}  >About us</Link></li>
<li><Link to='campus' offset={-260} smooth={true}  >Campus</Link></li>
<li><Link to='testimonials' offset={-260} smooth={true}  >Testimonials</Link></li>
<li><Link to='contact' offset={0} smooth={true} className='btn' >Contact us</Link></li>
</ul>
<img src={menu_icon} alt=""  className='menu'  onClick={toggleMenu} />
    </nav>
  )
}

export default navbar
