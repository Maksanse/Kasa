import logoBlanc from '../assets/LogoBlanc.png'
import "../styles/css/Footer.css"

function Footer(){


    return (
      <footer className='Footer__Container'>
        <img src={logoBlanc} alt="logo de Kasa en blanc"></img>
        <p className='Footer__Rigth'>© 2020 Kasa. All rights reserved</p>
       </footer> 
    )
}

export default Footer