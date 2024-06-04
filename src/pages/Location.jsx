import { useParams } from "react-router-dom"
import Collapse from "../components/Collapse"
import logement from '../datas/logements.json'
import Error from "./Error"
import RatingStars from "../components/Rating"
import '../styles/css/Location.css'
import Carrousel from "../components/Carrousel"

function Location(){

let{ id } = useParams()
const logements = logement.find(log => log.id === id) 


if (!logements) {
    return <Error />
  }

 const { title, pictures, description, host, rating, location, equipments, tags } = logements
 const [firstName, lastName] = host.name.split(" ")
    return(
        <article>
            <div>
                <Carrousel pictures={pictures}/>
            </div>
            <div className="Location__TitleHost">
                <div className="Location__Title">
                    <h1 className="Location__TitleText">{title}</h1>
                    <p className="Location__TitleTextLocation">{location}</p>
                </div>
                <div className="Location__NamePicture">
                    <div className="Location__GroupeName">
                       <p className="Location__Name">{firstName}</p>
                        <p className="Location__Name">{lastName}</p> 
                    </div>
                    <div>
                        <img className="Location__Picture" src={host.picture} alt={`cover${host.name}`}></img>
                    </div>
                </div>
            </div>


            <div className="Location__TagsRating">
                <div className="Location__Tags">
                    {tags.map((item, index)=> 
                    <li className="Location__Tagsli" key={index}>{item}</li>)}
                </div>
                <div>
                    <RatingStars initialRating={rating}/>
                </div>
            </div>
           
            
            <div className="Location__CollapseGroupe">
                <div className="Location__Collapse">
                      <Collapse title={"Description"} content={description} />
                </div>
                <div className="Location__Collapse">
                    <Collapse title={"Equipments"} content={equipments.map((item, index) => 
                    (<li className="Location__CollapseElement" key={index}>{item}</li>))} />
                
                </div>
            </div>
            
        </article>
    )


}

export default Location