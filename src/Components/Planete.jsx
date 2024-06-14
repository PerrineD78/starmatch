import Carousel from 'react-multi-carousel';
import './Planete.css';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";


function Planete () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div id="carouselContainer">
        
        <Carousel responsive={responsive}>
            <div id="img1">
                <img src="/coruscant (1).png" alt="Coruscant"/>
                <p>Coruscant</p>
            </div>
            <div id="img2">
                <img src="/naboo (2).png" alt="Naboo"/>
                <p>Naboo</p>
            </div>
            <div id="img3">
                <Link to="/Inscription">
                <img src="/tatooine (1).png" alt="Tatooine"/>
                <p>Tatooine</p>
            </Link>
            </div>
            <div id="img4">
                <img src="/felucia (1).png" alt="Felucia"/>
            <p>Felucia</p>
            </div>
            <div id="img5">
                <img src="/corellia (1).png" alt="Corellia"/>
            <p>Corellia</p>
            </div>
        </Carousel>
        </div>

    )
}

export default Planete;