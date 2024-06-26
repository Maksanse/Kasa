import { useState } from "react"
import "../styles/css/Carrousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight , faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Carrousel({pictures, title}){

    const [currentIndex, setCurrentIndex]= useState(0)

    const prevClick = ()=>{
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1))
    }

    const nextClick = ()=>{
        setCurrentIndex((nextIndex) => (nextIndex === pictures.length - 1 ? 0 : nextIndex + 1))
    }


return(
    <div>
        <div>
            <img className="Carrousel__img" src={pictures[currentIndex]} alt={`${title}`}></img>
            {pictures.length >= 2 && (
                <div>

                <div className="Carrousel__GroupeButton">
                <button className="Carrousel__Button--Left" onClick={prevClick}><FontAwesomeIcon icon={faChevronLeft} /> </button>
                <button className="Carrousel__Button--Right" onClick={nextClick}><FontAwesomeIcon icon={faChevronRight}/> </button>
            </div> 
            <p className="Carrousel__p">{currentIndex + 1}/{pictures.length}</p>
            </div>
            )}
            
           
        </div>
        
        
        
        
       
       
    </div>
)
}
export default Carrousel