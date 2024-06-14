import { Link } from "react-router-dom";
import "./Inscription.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' //hook de react router qui permet de naviguer 


function Inscription() {
    // const [firstnameInput, setfirstnameInput] = useState("");
    // const navigate = useNavigate();
    // const   handleInputChange = (e) => {
    //         setfirstnameInput(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFirstname(firstnameInput);
    //     navigate('/Welcome');

    return(
        <div className="login-box">
            <form>
            {/* <form onSubmit={handleSubmit}> */}
                <div className="user-box">
                    <input 
                    type="text" 
                    name="Lastname"
                    required/>
                    <label>Nom</label>
                </div>
                <div className="user-box">
                    <input 
                    type="text" 
                    name="Firstname" 
                    // value={firstnameInput}
                    // onChange={handleInputChange}
                    required/>
                    <label>Prénom</label>
                </div>
                <div className="user-box">
                    <input 
                    type="text" 
                    name="Species"
                    required/>
                    <label>Ton espèce</label>
                </div>
                <div className="user-box text-area">
                    <textarea
                    rows="3" // Set the number of visible text lines
                    cols="38" // Set the width of the textarea (number of characters)
                    placeholder="Dévoilez-vous en quelques mots"
                    />
                </div>
                <div className="user-box">
                    <input 
                    type="text" 
                    name="Pseudo"
                    required/>
                    <label>Pseudo</label>
                </div>
                <div className="user-box">
                    <input 
                    type="password" 
                    name="password" 
                    required/>
                    <label>Password</label>
                </div>
                <div className="user-box">
                </div><center>
                    {/* <button className="a" type="submit">ENREGISTRER</button> */}
                    <Link className="a" to="/Welcome">ENREGISTRER
                    <span></span>
                    </Link>
                    </center>
            </form> 
        </div>
)};

export default Inscription;