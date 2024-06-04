
import '../styles/css/Banner.css'
function Banner({img, withOverlay}){


return (
    <div className='Banner'>
        <img className='Banner__img' src={img} alt="e"></img>
        {withOverlay && (
            <div className='Banner__Overlay'> 
                <p className='Banner__OverlayText'>Chez vous partout et ailleurs</p>
            </div>
        )}
    </div>
)

}
export default Banner