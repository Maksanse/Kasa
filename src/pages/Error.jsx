import { Link } from "react-router-dom"
import '../styles/css/Error.css'

function Error() {



    return (
        <article className="Error"> 
            <p className="Error__404">404</p>
            <div className="Error__TextContainer">
                 <p className="Error__text">Oups ! La page que</p>
                <p className="Error__text">vous demandez n'existe pas.</p>
            </div>
           
            <Link className="Error__Link" to="/">Retourner sur la page d'accueil</Link>
        </article>
    )
}

export default Error