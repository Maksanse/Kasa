import '../styles/css/Card.css'
import { Link } from 'react-router-dom'
function Card({id, title, cover}){




return (
    <div className="Card">
        
        <Link to={`/Location/${id}`}>
        <li className="Card__li" key={id}>
            <img className="Card__img" src={cover} alt={`cover${title}`}></img>
            <div className='Card__Overlay'>
             <div className='Card__OverlayText'>{title}</div>   
            </div>
            
        </li></Link>
    </div>
)

}

export default Card