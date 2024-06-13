import React from 'react';
import './AccueilPage.css';

const AccueilPage = () => {
    return (
        <div className="accueil-container">
            <div className="title-container">
                <h1 className="title">Star Match</h1>
                <img src="/src/assets/logo.png" alt="Logo" className="logo" />
            </div>
            <div className="subtitle-container">
                <h2 className="subtitle">Login</h2>
                <input type="text" placeholder="ID" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <button className="create-account-btn">Créer un compte</button>
            </div>
        </div>
    );
};

export default AccueilPage;


/*
import { Link } from 'react-router-dom';
<Link to="/select-planet" className="create-account-btn">Créer un compte</Link> */