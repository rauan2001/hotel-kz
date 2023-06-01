import React from 'react'
import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer'

function About() {
  return (
    <div className="container">
    <div className="header">
     <Header/>
     </div>
     <div className="content">
        Об этом
     </div>
     <div className="footer-container">
     <Footer />
   </div>
 </div>
  )
}

export default About