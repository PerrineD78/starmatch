import { useEffect, useState } from "react";
import "./Characters.css";

function Characters() {
  const [starwarsCharacters, setstarwarscharacters] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((result) => result.json())
      .then((result) => console.log(result) || setstarwarscharacters(result));
  }, []);

  return (
    <section className="mainCard">
      {starwarsCharacters.map((character) => {
        return (
          <div key={character.id} className="globalCard">
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <p>{character.gender}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Characters;
