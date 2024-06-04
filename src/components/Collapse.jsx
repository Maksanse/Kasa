
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import '../styles/css/Collapse.css'
import { faChevronUp , faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Collapse({title, content}){




const [isOpen, setIsOpen] = useState(false)

return (
   <div className="Collapse">
        <div className="Collapse__ContainerHeader">
            <h3>{title}</h3>
            <button className="Collapse__Button" onClick={()=>setIsOpen(!isOpen)}> {isOpen ? <FontAwesomeIcon icon={faChevronUp} size="2x" style={{color: "#ffffff",}} />
             : <FontAwesomeIcon icon={faChevronDown}size="2x" style={{color: "#ffffff",}} />}</button>
        </div> 
        {isOpen &&
        <div className="Collapse__Description">
            <p>{content}</p>
        </div>
        }
    </div>
)

}

export default Collapse