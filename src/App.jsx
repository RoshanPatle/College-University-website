import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimoniials/Testimonials'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'



function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <div className="container">
      <Title   subTitle='Our Programs' Title='What We Offer'  />
     <Programs/>
     <About/>
     <Title   subTitle="GALLERY" Title='Campus Photos'  />
     <Campus/>
     <Title   subTitle="TESTIMONIALS" Title='What Student Says'  />
     <Testimonials/>
     <Title   subTitle="CONTACT US" Title='Get in Touch'  />
     <Contact/>
     </div>
     <Footer/>
    </>
  )
}

export default App
