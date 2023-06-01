import React from 'react'
import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer'

function Contacts() {
  return (
    <div className="container">
    <div className="header">
     <Header/>
     </div>
     <div className="content">
        Контакты
     </div>
     <div className="footer-container">
     <Footer />
   </div>
 </div>
  )
}

export default Contacts