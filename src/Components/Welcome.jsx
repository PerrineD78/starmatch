import { Link } from "react-router-dom";
import matchPic from '../assets/matchPic.png'
import './Welcome.css'
import logo from '../assets/logo.png'


const Welcome = ({ firstname }) => {
    return (
        <div>
            {/* <h1>Bienvenue {firstname} </h1>
            <h2>Prêt pour trouver ton starmatch</h2> */}
            <img  className='logo' src={logo} alt="Logo starmatch" />
            <h2>Bienvenue </h2>
            <h1>Abdou</h1>
            <img  className='matchPic' src={matchPic} alt="match person picture" />
            <h2>Prêt pour trouver ton starmatch </h2>
            {/* <link className="heart" to>&#x2764;</span> */}
            <Link className="heart" to="/Characters">&#x2764;
                    </Link>

        </div>
    );
};

export default Welcome;