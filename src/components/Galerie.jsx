import Card from "./Card"
import logement from '../datas/logements.json'
import '../styles/css/Galerie.css'

function Galerie(){


    return(
        <div className="Galerie">
            <ul className="Galerie__ul">
            {logement.map((logement) => (
               <Card id={logement.id} key={logement.id} cover={logement.cover} title={logement.title} /> 
            ))}
            </ul>
        </div>
    )
}

export default Galerie