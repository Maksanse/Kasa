import Banner from "../components/Banner";
import source1 from '../assets/source1.png'
import Galerie from "../components/Galerie";
function Home() {
  return (
 <article>
  <Banner img={source1} withOverlay={true} />
  <Galerie />
 </article>
  );
}

export default Home;
