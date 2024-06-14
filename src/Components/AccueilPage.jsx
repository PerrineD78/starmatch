import React, { useState, useRef, useEffect } from 'react';
import './AccueilPage.css';
import backgroundMusic from '/src/assets/background-music.mp3';

const AccueilPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const handleAudioControl = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4;
        }
    }, []);
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
            <audio ref={audioRef} src={backgroundMusic} loop />
            <button className="audio-control-btn" onClick={handleAudioControl}>
                👽
            </button>
            <footer className="footer">
                ©2024 WILDERS - N.P.M.S.S.F
            </footer>
        </div>
    );
};

export default AccueilPage;


/*
import { Link } from 'react-router-dom';
<Link to="/select-planet" className="create-account-btn">Créer un compte</Link> */