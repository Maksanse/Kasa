import logoBlanc from '../assets/LogoBlanc.png'
import "../styles/css/Footer.css"

function Footer(){


    return (
      <footer className='Footer__Container'>
        <img src={logoBlanc} alt="logo de Kasa en blanc"></img>
        <div className='Footer__TextContainer'>
           <p className='Footer__Rigth'>© 2020 Kasa. All</p>
         <p className='Footer__Rigth'>rights reserved</p>
        </div>
       
       </footer> 
    )
}

export default Footer