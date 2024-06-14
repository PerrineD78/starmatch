import { useState, useEffect } from "react";
import "./Page4.css";

function Page4() {
  const [starwarsCharacters, setStarwarsCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null); // État pour suivre la carte sélectionnée
  const [showAlert, setShowAlert] = useState(false); // État pour afficher l'alerte
  const charactersPerPage = 9;

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setStarwarsCharacters(data);
        selectCharacters(data);
      })
      .catch((error) => console.error("Fetch error: ", error));
  }, []);

  const selectCharacters = (characters) => {
    const species = [...new Set(characters.map((char) => char.species))];
    const selected = [];

    species.forEach((specie) => {
      const charactersBySpecies = characters.filter((char) => char.species === specie);
      if (charactersBySpecies.length > 0) {
        selected.push(charactersBySpecies[Math.floor(Math.random() * charactersBySpecies.length)]);
      }
    });

    while (selected.length < 12 && characters.length > selected.length) {
      const remainingCharacters = characters.filter((char) => !selected.includes(char));
      if (remainingCharacters.length > 0) {
        selected.push(remainingCharacters[Math.floor(Math.random() * remainingCharacters.length)]);
      } else {
        break;
      }
    }

    setSelectedCharacters(selected);
  };

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = selectedCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(selectedCharacters.length / charactersPerPage)));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Fonction pour gérer la sélection d'une carte
  const handleCardClick = (character) => {
    setSelectedCard(character.id === selectedCard ? null : character.id); // Toggle la sélection
    setShowAlert(false); // Réinitialise l'alerte lorsque la carte est sélectionnée/désélectionnée
  };

  // Fonction pour valider la sélection
  const handleValidate = () => {
    const selectedCharacter = starwarsCharacters.find((char) => char.id === selectedCard);
    if (selectedCharacter) {
      if (selectedCharacter.species.toLowerCase() !== "human") {
        setShowAlert(true); // Affiche l'alerte si l'espèce n'est pas "human"
      } else {
        window.location.href = "http://localhost:5173/Characters"; // Redirection vers l'URL spécifiée après validation
      }
    }
  };

  return (
    <div className="page4">
      <div className="logoAndBrand">
        <h1 className="page4-brandTitle">StarMatch</h1>
        <img className="logoStarmacth" src="src/assets/logo.png" alt="logoStarmatch" />
      </div>
      <h2 className="page4-title">Sélectionner votre espèce préférée</h2>
      <div className="characters-list">
        {currentCharacters.map((character) => (
          <div
            key={character.id}
            className={`character-card ${character.id === selectedCard ? "selected" : ""}`}
            onClick={() => handleCardClick(character)}
          >
            <img src={character.image} alt={character.name} className="character-image" />
            <p>{character.species}</p>
          </div>
        ))}
      </div>
      <div className="pagination-buttons">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Précédent
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(selectedCharacters.length / charactersPerPage)}
        >
          Suivant
        </button>
      </div>
      {showAlert && selectedCard && (
        <div className="alert-message">
          <p className="alert-text">
            Vous n&aposêtes pas compatible.
            <br />
            Merci de sélectionner une autre espèce
          </p>
        </div>
      )}
      {!showAlert && selectedCard && (
        <div className="validate-button-container">
          <button className="validate-button" onClick={handleValidate}>
            Valider
          </button>
        </div>
      )}
    </div>
  );
}

export default Page4;
