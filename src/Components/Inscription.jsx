import { Link } from "react-router-dom";
import "./Inscription.css"



function Inscription() {
    return(
        <div className="login-box">
            <form>
                <div className="user-box">
                    <input type="text" name="Lastname" required/>
                    <label>Nom</label>
                </div>
                <div className="user-box">
                    <input type="text" name="Firstname" required/>
                    <label>Prénom</label>
                </div>
                <div className="user-box">
                    <input type="text" name="Species" required/>
                    <label>Ton espèce</label>
                </div>
                <div className="user-box">
                <textarea
                rows="4" // Set the number of visible text lines
                cols="32" // Set the width of the textarea (number of characters)
                placeholder="Dévoilez-vous en quelques mots"
                />
                </div>
                <div className="user-box">
                    <input type="text" name="Pseudo" required/>
                    <label>Pseudo</label>
                </div>
                <div className="user-box">
                    <input type="password" name="password" required/>
                    <label>Password</label>
                </div>
                <div className="user-box">
                </div><center>
                    <Link className="a" to="/Characters">ENREGISTRER
                    <span></span>
                    </Link></center>
            </form> 
        </div>
)};


export default Inscription;