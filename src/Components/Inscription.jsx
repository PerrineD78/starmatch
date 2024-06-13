import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
                <input type="date" name="Birthdate" required/>
                <label>Date de naissance</label>
            </div>
            <div className="user-box">
                <input type="text" name="Species" required/>
                <label>Ton espèce</label>
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
                <a href="#">ENREGISTRER
                <span></span>
                </a></center>
        </form> 
    </div>
    )
};


export default Inscription;